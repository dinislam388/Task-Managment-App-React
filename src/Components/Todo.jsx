import { useContext, useState } from "react";
import { todoContext } from "../Context/Context";

const Todo = ({todo}) => {
    const {dispatch} = useContext(todoContext)
    const { task} = todo
    const [iscomplete,setIsComplete] = useState(false)
    console.log(iscomplete)
    // delete todo
const deleteTodo = (id)=>{
    dispatch({type:'DELETE_TODO', payload:id})
}

// completeTodo

    return (
        <div className="inputBox">
            <h1 className="singleTodo" style={{textDecoration:iscomplete && 'line-through',color:iscomplete ? '#B83C30' : null,
            // fontSize:iscomplete ? '50px' : null 
            }}>{task}
            </h1>
            <input className="inputBox" type="checkbox" 
            checked={iscomplete}
            onChange={(e)=>setIsComplete(e.target.checked)}/>
            
            <button className="deleteBtn" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default Todo;