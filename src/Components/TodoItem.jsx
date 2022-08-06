import React from 'react'

function TodoItem({todo}) {
  const {title,description,status,timeStamp}=todo;
  
  return (
    <div>
      {/* <p> {title}  </p> */}
        <span>{title}</span>{"--"}<span>{timeStamp}</span>
        <p>{description}</p>
        <p>{status?"completed":"pending"}</p>
      
    </div>
  )
}

export default TodoItem
