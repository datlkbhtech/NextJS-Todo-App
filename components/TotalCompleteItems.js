import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const [taskNumber, setTaskNumber] = useState(0);
	const [taskOpen, setTaskOpen] = useState(0);
	const [taskComlete, setTaskComlete] = useState(0);

	const tasg = useSelector((state) =>{
		state.todos
		}
	);
	// const todos = useSelector((state) => state.todos);
console.log(tasg);
	// todos.map((todo) => {
	// 	console.log(todo.Checked, todo.id)
	// })
	return (
		<div className=" px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
			<p className="flex-1 order-1"> tasks</p>
			<p className="flex-1 order-2 text-center" > complete</p>
			<p className="flex-1 order-last text-right" > open</p>
		</div>
	)
};

export default TotalCompleteItems;
