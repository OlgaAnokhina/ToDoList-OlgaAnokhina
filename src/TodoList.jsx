import React from 'react';
import TodoListItem from './TodoListItem';


/*const todoList = [
    { id: 1, title: 'chek the work' },
    { id: 2, title: 'cook a dinner' },
    { id: 3, title: 'Go to the gym' },
  ];*/
function TodoList({todoList, onRemoveTodo}) {


    return (
      <div>
        
        <ul> 
          
        {todoList.map(todo => (
         <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
    ))}
         </ul>
      </div>
          )
    
}

export default TodoList;