import React, { memo } from 'react';
const Header=()=> {
  const d = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <header className="bg-todo-header-day bg-cover bg-center border-b-1 border-gray-300 px-4 py-6" >
      <h2 class="text-2xl text-white" >{weekday[d.getDay()]}, {d.getDate()}th</h2>
      <p class="pt-1 text-lg text-gray-100" >{months[d.getMonth()]}</p>
    </header>
  );
}

export default memo(Header);