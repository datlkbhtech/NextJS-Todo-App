import React, { useState } from 'react';

const TotalCompleteItems = () => {


	

	// todos.map((todo) => {
	// 	console.log(todo.Checked, todo.id)
	// })
	return (
		<div className=" px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
	
			<p className="flex-1 order-2 text-center" > complete</p>
			<p className="flex-1 order-last text-right" > open</p>
		</div>
	)
};

export default TotalCompleteItems;


