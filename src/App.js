
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import TodoList from './Components/TodoList';

// export const todos=createContext(());





const todos=[{
  title:"eat",
  description: "10 o clock",
  status:false,
  timeStamp:new Date().toDateString(),
}]




function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <h1>To do</h1>
    <TodoList todos={todos}/>
 
    
    <Footer/>
    </div>
  
    </BrowserRouter>
  );
}

export default App;
