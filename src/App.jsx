import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState([]);

  function addTodo(text) {
    console.log("Add Todo", text);
  }

  return (
    <>
      <h1>Vite + React Yippee</h1>
      <Form submitHandler={addTodo}/>
    </>
  )
}

export default App
