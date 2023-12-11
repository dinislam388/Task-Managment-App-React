import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/Reducer.js";
import { todoContext } from "../Context/Context.jsx";

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(state.todos))
  },[state.todos])

  return (
    <>
      <todoContext.Provider value={{ state, dispatch }}>
        {children}
      </todoContext.Provider>
    </>
  );
};

export default TodoProvider;
