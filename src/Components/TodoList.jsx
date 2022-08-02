import React from 'react'
import TodoItem from './TodoItem';

function TodoList(todos) {
 
  return (
    <div>
      {
        todos.map((todo,i)=>{
          <TodoItem key={i} props={todo} />
        })
      }
      
    </div>
  )
}

export default TodoList;
