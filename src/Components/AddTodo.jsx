import { useContext, useState } from "react";
import { todoContext } from "../Context/Context";

const AddTodo = () => {
   const { dispatch} = useContext(todoContext)
   const [todo, setTodo] = useState("")
//    console.log(todo);
  
    // console.log(newTodo);
    const todoListHandler = (e)=> {
        e.preventDefault()
        setTodo('')
        // Create new todo 
        
        const newTodo =  {
            id: Date.now(),
            task: todo
            
         }

         dispatch(
            {
                type: 'ADD_TODO',
                payload: newTodo
            }
           )
          
    }

    return (
        <>
            <div>
                <form onSubmit={todoListHandler} >
                    <input 
                    onChange={(e)=> setTodo(e.target.value) }
                    value={todo}
                    type="text"
                    required 
                    placeholder="Add Your Task" />
                    <button className="addBtn" type="submit">Add Task</button>
                </form>
            </div>
        </>
    );
};

export default AddTodo;