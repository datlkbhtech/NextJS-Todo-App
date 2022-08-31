import React, { useEffect, FC } from 'react';
import TodoItem from './TodoItem';
import { useAppSelector, useAppDispatch } from '../redux/hook'
import { getTodosAsync } from '../redux/todoSlice';
import { PayloadOptions } from './interface';
const TodoList: FC = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state: { todos: Array<PayloadOptions> }) => {
		return state.todos;
	})
	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul >
			{todos.map((todo: PayloadOptions) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.Name} complete={todo.Checked} />
			))}
		</ul>
	);
};

export default TodoList;
