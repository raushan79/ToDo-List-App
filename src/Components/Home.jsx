import React, {  useEffect, useState } from 'react'
import TodoList from './TodoList';


function Home() {
 
  const [todos,setTodos]=useState([]);
  const getTodo=()=>{
    let mytodo=JSON.parse(localStorage.getItem("mytodo"));
    setTodos( mytodo);
  }
  

 useEffect(getTodo(),[]);

  return (
    <div>
        <h1>All Your Todo List</h1>
        {
          todos.length? <TodoList todos={todos}/> :<h1>There is No todo Item</h1>

        }
      
    </div>
  )
}

export default Home
