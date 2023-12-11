import './App.css'

import AddTodo from "./Components/AddTodo";
import TodoProvider from "./Components/TodoProvider";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
    <h1 className='heading'>Task Managment App</h1>
    <div className="bg">
    
      <TodoProvider>
        <div className='fromBox'>
          <AddTodo/>
          <Todos />
        </div>
      </TodoProvider>
      </div>
    </>
  );
}

export default App;

// 0. create react vite (install)
// 1. create context (Context)
// 1/1.
// 2. create useReducer with todo.provier (TodoProvider)
// 3. Recive useReducer Value pass in App.jsx {Children}
// 4. 
