import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import instance from './utils/request'

export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await instance.get('');
		const todos = await resp.data;
		return { todos };
	}
);

export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload:any) => {
		const resp = await instance
			.post('',{
				Name: payload.title
			})
		const todo = await resp.data;
		return { todo };
	}
);

export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload:any) => {
		const resp = await instance.patch(`${payload.id}`, {
			Checked: payload.complete
		});
		const todo = await resp.data;
		return { todo };
	}
);

export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload:any) => {
		await instance.delete(`${payload.id}`, {
		});
		return { id: payload.id };
	}
);

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state:any, action) => {
			const todo = {
				id: nanoid(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},
		toggleComplete: (state:any, action) => {
			const index = state.findIndex((todo: { id: any; }) => todo.id === action.payload.id);
			state[index].completed = action.payload.complete;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo: { id: any; }) => todo.id !== action.payload.id);
		},
	},
	extraReducers: {
		[getTodosAsync.fulfilled as any]: (_state: any, action: { payload: { todos: any; }; }) => {
			return action.payload.todos;
		},
		[addTodoAsync.fulfilled as any]: (state: any[], action: { payload: { todo: any; }; }) => {
			state.push(action.payload.todo);
		},
		[toggleCompleteAsync.fulfilled as any]: (state: any[], action: { payload: { todo: { id: any; Checked: any; }; todos: any; }; }) => {
			const index = state.findIndex(
				(todo: { id: any; }) => todo.id === action.payload.todo.id);
			state[index].Checked = action.payload.todo.Checked;
			return action.payload.todos;
		},
		[deleteTodoAsync.fulfilled as any]: (state: any[], action: { payload: { id: any; }; }) => {
			return state.filter((todo: { id: any; }) => todo.id !== action.payload.id);
		},
	},
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
