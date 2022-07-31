import React from 'react'

function CreateTodo() {
  const [task,setTask]=React.useState("");

  const todoHandler=()=>{
    const payload={
      task,
      status:false,
    }
    // console.log(payload);    
    let mytodo=JSON.parse(localStorage.getItem("mytodo"));
    if(mytodo){
      // if mytodo return null initilize toto
      localStorage.setItem("mytodo",JSON.stringify([payload]));      
    }else{
      mytodo=[...mytodo,payload];
      localStorage.setItem("mytodo",JSON.stringify(mytodo));
    }
    // console.log(mytodo);
    setTask("");
  }

  return (

    <div>
      <h1>Add a Todo List</h1>
      <div>
        <p>Write your task....</p>
        <textarea name="task" id="" cols="30" rows="10" value={task} onChange={(e)=>setTask(e.target.value)}></textarea>
        <br />
        <button onClick={todoHandler}>Add</button>
      </div>
      
    </div>
  )
}

export default CreateTodo
