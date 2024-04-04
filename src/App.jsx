/*import { useState } from 'react'*/
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
//import React, { useState } from 'react'; 
import React, { useState, useEffect } from 'react'; // Добавляем импорт useEffect

/*function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      {/* другой JSX код }
      <TodoList todoList={todoList} />
    </div>
  );
}*/
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
  };

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem('savedTodoList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}


  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </div>
  );
}
/*function App() {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem('savedTodoList');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });
  //const [newTodo, setNewTodo] = useState('');
  //const [todoList, setTodoList] = useState([]);

 // Определение useEffect для сохранения todoList в localStorage
 useEffect(() => {
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
}, [todoList]);
  
  const addTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, { ...newTodo, id: Date.now() }]);
  };
  return (
    
      <div className="App">
          <h1>TODO LIST</h1>
          <AddTodoForm onAddTodo={addTodo}/>
      
         
          
          <TodoList todoList={todoList} />
      </div>
  );
}
/*
function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      {/* другой JSX код *//*}
      /*<TodoList todoList={todoList} />
    </div>
  );
} */
/*const todoList = [
  { id: 1, title: 'chek the work' },
  { id: 2, title: 'cook a dinner' },
  { id: 3, title: 'Go to the gym' },
];*/

/*function App() {
    </div>
  

  return (
    /*<div>
      <h1>Todo List</h1>
      <ul>
      {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
*/
export default App
