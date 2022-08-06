import React from 'react'
import TodoItem from './TodoItem';

function TodoList({todos}) {
  // const todo={
  //   title:"eat",
  //   description: "10 o clock",
  //   status:false,
  //   timeStamp:new Date().toDateString(),
  // }
  
 
  return (
    <div>
      {
        todos.map((todo,i)=>{
          return <TodoItem key={i} todo={todo} />
        })
      }
      
    </div>
  )
}

export default TodoList;
