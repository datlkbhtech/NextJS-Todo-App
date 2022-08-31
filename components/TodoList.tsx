import React, { useEffect, FC } from 'react';
import TodoItem from './TodoItem';
import { useAppSelector, useAppDispatch } from '../redux/hook'
import { getTodosAsync } from '../redux/todoSlice';
import { PayloadType } from './interface';
const TodoList: FC = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state: { todos: Array<PayloadType> }) => {
		return state.todos;
	})
	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul >
			{todos.map((todo: PayloadType) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.Name} complete={todo.Checked} />
			))}
		</ul>
	);
};

export default TodoList;
