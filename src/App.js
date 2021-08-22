import './App.css'
import { Form } from './Components/Form/Form'
import { Todo } from './Components/Todo/Todo'
import { useContext } from 'react'
import { storeContext } from './Context/store'

export const App = () => {
  const {todos} = useContext(storeContext)

  return (
    <div className="container">
      <section className="app">
        <h1 className="app__title">
          Todo App
        </h1>
        <Form />

        {
            todos.map(todo => (
              <Todo 
                todo={todo}
                key={todo.id}
              />
            ))
        }
      </section>
    </div>
  )
}
