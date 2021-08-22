import { createContext, useReducer, useEffect } from "react"
import { reducers } from "./reducers"
import { intialState } from "./intialState"
export const storeContext = createContext()

const data = JSON.parse(localStorage.getItem("todos"))

export const Store = ({children}) => {
    const [todos, dispatch] = useReducer(reducers, data ? data : intialState)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <storeContext.Provider value={{
            todos,
            dispatch
        }}>
            {children}
        </storeContext.Provider>
    )
}
