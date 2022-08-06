import React, {   useState } from 'react'
import TodoList from './TodoList';

// http://localhost:8080/todos


function Home() {
 
  const [todos,setTodos]=useState(JSON.parse(localStorage.getItem("mytodo")));
 
  


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
