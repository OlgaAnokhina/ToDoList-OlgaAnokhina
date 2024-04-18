import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';


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
  //const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  
  const addTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, { ...newTodo, id: Date.now() }]);
  };
  // Добавляем функцию для удаления задачи
  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    
      <div className="App">
          <h1>TODO LIST</h1>
          <AddTodoForm onAddTodo={addTodo}/>
      
         
          
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
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
