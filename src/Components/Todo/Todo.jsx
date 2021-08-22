import './Todo.css'
import { useContext } from 'react'
import { storeContext } from '../../Context/store'
import { types } from '../../Context/types'
export const Todo = ({todo}) => {
    const {dispatch} = useContext(storeContext)

    return (
        <article className="todo">
            <h2>
                {todo.title}
            </h2>

            <div className="todo__buttons">
                <button 
                    className={ todo.completed === true ? "btn btn-green todo__btn" : "btn btn-blue todo__btn" }
                    onClick={() => dispatch( {type: types.COMPLETE_TODO, payload: todo.id} )}
                >
                    <i className='bx bx-check-square'></i>
                </button>

                <button 
                    className="btn btn-red todo__btn"
                    onClick={() => dispatch( {type: types.DELETE_TODO, payload: todo.id} )}
                >
                    <i className='bx bx-trash-alt' ></i>
                </button>
            </div>
        </article>
    )
}