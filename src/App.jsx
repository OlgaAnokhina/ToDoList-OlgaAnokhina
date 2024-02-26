import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  { id: 1, title: 'chek the work' },
  { id: 2, title: 'cook a dinner' },
  { id: 3, title: 'Go to the gym' },
];

function App() {
  

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
      {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
