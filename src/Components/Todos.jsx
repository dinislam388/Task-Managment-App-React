import { useContext } from "react";
import { todoContext } from "../Context/Context";
import Todo from "./Todo";

const Todos = () => {
  const { state } = useContext(todoContext);

//    console.log(state);
  return <div className="bg">
    {
        state.todos.map((todo) => <Todo key={todo.id} todo={todo}  />   )
    
    }
   
  </div>;
};

export default Todos;
