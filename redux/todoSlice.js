import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const url = 'https://62e894c693938a545be7e19b.mockapi.io/kdAPI/TodoItems'
const axios = require('axios').default;

export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await axios.get(url);
		const todos = await resp.data;
		return { todos };
	}
);
export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await axios
			.post(url, {
				Name: payload.title
			})
		const todo = await resp.data;
		return { todo };
	}
);
export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload) => {
		const resp = await axios.patch(`https://62e894c693938a545be7e19b.mockapi.io/kdAPI/TodoItems/${payload.id}`, {
			Checked: payload.complete
		});
		const todo = await resp.data;
		console.log("🚀 ~ file: todoSlice.js ~ line 32 ~ todo", todo)
		return { todo };
	}
);

export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload) => {
		await axios.delete(`https://62e894c693938a545be7e19b.mockapi.io/kdAPI/TodoItems/${payload.id}`, {
		});
			return { id: payload.id };
	}
);

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.complete;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
	extraReducers: {
		[getTodosAsync.fulfilled]: (_state, action) => {
			return action.payload.todos;
		},
		[addTodoAsync.fulfilled]: (state, action) => {
			state.push(action.payload.todo);
		},
		[toggleCompleteAsync.fulfilled]: (state, action) => {
			const index = state.findIndex(
				(todo) => todo.id === action.payload.todo.id);
			state[index].Checked = action.payload.todo.Checked;
			return action.payload.todos;
		},
		[deleteTodoAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
