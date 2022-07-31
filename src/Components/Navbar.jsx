import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CompleteTodo from './CompleteTodo';
import CreateTodo from './CreateTodo';
import Home from './Home';
import PendingTodo from './PendingTodo';

function Navbar() {
  return (
    <div>
       
       <button><Link to="/">Home</Link></button>
        <button><Link to="addtodo">Add a Todo</Link></button>
        <button><Link to="/completetodo">Show Completed Task</Link></button>
        <button><Link to="/pendingtodo">Show Pending Task</Link></button>
      
        
       <Routes>
           <Route path={'/'} element={<Home/>}></Route>
           <Route path={'/completetodo'} element={<CompleteTodo/>}></Route>
           <Route path={'/addtodo'} element={<CreateTodo/>}></Route>
           <Route path={'/pendingtodo'} element={<PendingTodo/>}></Route>

       </Routes>
    </div>
  )
}

export default Navbar
