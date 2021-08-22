import './Form.css'
import { useState, useContext } from 'react'
import { storeContext } from '../../Context/store'
import { types } from '../../Context/types'

export const Form = () => {
    const [task, setTask] = useState("")
    const [error, setError] = useState("")
    const {dispatch} = useContext(storeContext)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(!task){
            setError("Debes agregar una tarea")
            return
        }else{
            dispatch({
                type: types.ADD_TODO,
                payload: {
                    id: Date.now(),
                    title: task,
                    completed: false
                }
            })
        }
        setTask("")
        setError("")
    }

    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <div className="form__group">
                <input 
                    type="text" 
                    placeholder="Add your new todo"
                    className="form__input"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="form__button">
                    <i className='bx bx-add-to-queue'></i>
                </button>
            </div>

            {
                error ? <p className="form__message">Debes agregar una tarea</p> : null
            }
        </form>
    )
}
