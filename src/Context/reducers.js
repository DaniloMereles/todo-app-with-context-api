import { types } from "./types"
export const reducers = (state, action) => {
    switch(action.type){
        case types.ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case types.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case types.COMPLETE_TODO:{
            const newState = state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }else{
                    return todo
                }
            })
            return newState
        }   
        default:
            return state
    }
}