import {getDataFromLs} from '../Components/getDataFromLs/localStorage'

export const  initialState={
    todos: getDataFromLs(),
}

    export const reducer= (state, action) => {
            switch (action.type) {
                case 'ADD_TODO':
                 
                    return {
                        ...state,   
                       todos: [...state.todos, 
                        action.payload] 
                    }
                  case 'DELETE_TODO':
                    const deleteTodo = state.todos.filter((todo)=>todo.id !==action.payload)
                    return{
                        ...state,
                        todos: deleteTodo
                    }
                default:
                    return state
            }
}