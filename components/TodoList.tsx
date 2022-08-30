import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useAppSelector, useAppDispatch } from '../redux/hook'
import { getTodosAsync } from '../redux/todoSlice';

const TodoList: React.FC = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state: { todos: any; }) => state.todos);

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul >
			{todos.map((todo: any) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.Name} complete={todo.Checked} />
			))}
		</ul>
	);
};

export default TodoList;
