import React, { useContext, useEffect, useState } from 'react'
import {MyTodo} from '../App'

function Home() {
 
  const todoList=useContext(MyTodo);
  

//  useEffect(getTodo(),[])

  return (
    <div>
        <h1>All Your Todo List</h1>
        {
          todoList.length?( todoList.map((ele,i)=>{
            return (
              <div key={i}>
              <h4>{ele.task}</h4>
              <h4>{ele.status?"Complete":"Pending"}</h4>
              <button >Mark {!ele.status?"Complete":"Pending"}</button>
              </div>
            )

          })
        ):<h1>There is No todo Item</h1>

        }
      
    </div>
  )
}

export default Home
