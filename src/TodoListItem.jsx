import React from 'react';


function TodoListItem(props) {
    const { todo } = props;
    return (
       /* <div>
              <h1>Todo List</h1>
              <ul>
              {todoList.map((todo) => (
                <li> {todo.title}</li>
                  /*<li key={todo.id}>{todo.title}</li>
                ))}
              </ul>
          </div> */
          <li>{todo.title}</li> 
    )
}


export default TodoListItem;