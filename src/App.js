
import { BrowserRouter } from 'react-router-dom';

import { createContext } from "react";
import './App.css';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
const getTodo=()=>{
  let todo=JSON.parse(localStorage.getItem("mytodo"));
  return todo
}
export const MyTodo=createContext();



function App() {
  return (
    <BrowserRouter>
    <MyTodo.Provider value={getTodo()}>
    <div className="App">
    <h1>To do</h1>
    <Navbar/>
    
    <Footer/>
    </div>
    </MyTodo.Provider>
    </BrowserRouter>
  );
}

export default App;
