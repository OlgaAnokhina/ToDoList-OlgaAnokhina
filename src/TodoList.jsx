import React from 'react';


const todoList = [
    { id: 1, title: 'chek the work' },
    { id: 2, title: 'cook a dinner' },
    { id: 3, title: 'Go to the gym' },
  ];
function TodoList() {


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

export default TodoList;