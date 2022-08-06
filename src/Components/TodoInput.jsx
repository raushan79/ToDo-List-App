import React from "react";

function TodoInput() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");


  const handleClick=()=>{
    
    const payload={
      title,
      description,
      status:false,
      timeStamp : new Date().toDateString(),

    }
    console.log(payload);
    let mytodo=JSON.parse(localStorage.getItem("mytodo"));
    if(mytodo){
      mytodo=[...mytodo,payload];
      localStorage.setItem("mytodo",JSON.stringify(mytodo));
    }else{
      localStorage.setItem("mytodo", JSON.stringify([payload]));
    }
    alert("Todo Added");
    setTitle("");
    setDescription("");
  }
    
  //   // console.log(payload);
  //   let mytodo = JSON.parse(localStorage.getItem("mytodo"));
  //   if (mytodo) {
  //     // if mytodo return null initilize toto
  //     localStorage.setItem("mytodo", JSON.stringify([payload]));
  //   } else {
  //     mytodo = [...mytodo, payload];
  //     localStorage.setItem("mytodo", JSON.stringify(mytodo));
  //   }
  //   // console.log(mytodo);
  //   setTask("");
  // };

  return (
    <div>
      <h1>Add a Todo List</h1>
      <div>
        <input type="text" placeholder="Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <p>Write your task....</p>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button onClick={()=> handleClick()}>Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
