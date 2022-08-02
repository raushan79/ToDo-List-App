import React from 'react'

function TodoItem({props}) {
    const [title,description,status,timeStamp]=props;
  return (
    <div>
        <p>{title}</p><p>{timeStamp}</p>
        <p>{description}</p>
        <p>{status?"completed":"pending"}</p>
      
    </div>
  )
}

export default TodoItem
