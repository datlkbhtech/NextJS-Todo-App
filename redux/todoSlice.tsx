import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import instance from './utils/request'
interface PayloadOptions {
	id?: number;
	title?: string;
	Checked?: boolean;
}
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
	async (payload: PayloadOptions) => {
		const resp = await instance
			.post('', {
				Name: payload.title
			})

		const todo = await resp.data;
		return { todo };
	}
);

export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload: PayloadOptions) => {
		const resp = await instance.patch(`${payload.id}`, {
			Checked: payload.Checked
		});
		const todo = await resp.data;
		return { todo };
	}
);

export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload: PayloadOptions) => {
		await instance.delete(`${payload.id}`, {
		});
		return { id: payload.id };
	}
);

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state: Object[], action) => {
			const todo = {
				id: nanoid(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},
		toggleComplete: (state: Array<PayloadOptions>, action) => {
			const index = state.findIndex((todo: PayloadOptions) => todo.id === action.payload.id);
			state[index].Checked = action.payload.complete;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo: PayloadOptions) => todo.id !== action.payload.id);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTodosAsync.fulfilled, (state, action) => {
				return action.payload.todos;
			})
			.addCase(addTodoAsync.fulfilled, (state: Object[], action: { payload: { todo: PayloadOptions; } }) => {
				state.push(action.payload.todo);
			})
			.addCase(deleteTodoAsync.fulfilled, (state, action: { payload: PayloadOptions; }) => {
				return state.filter((todo: PayloadOptions) => todo.id !== action.payload.id);
			})
			.addCase(toggleCompleteAsync.fulfilled, (state: Array<PayloadOptions>, action: { payload: { todo: PayloadOptions } }) => {
				const index = state.findIndex(
					(todo) => todo.id === action.payload.todo.id);
				state[index].Checked = action.payload.todo.Checked;
			})

	},
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
