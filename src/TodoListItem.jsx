import React from 'react';
//<TodoListItem key={todo.id} todo={todo} />

function TodoListItem({todo}) {
    //const { todo } = props;
    return <li>{todo.title}</li>;
       /* <div>
              <h1>Todo List</h1>
              <ul>
              {todoList.map((todo) => (
                <li> {todo.title}</li>
                <li key={todo.id}>{todo.title}</li>
                ))}
              </ul>
          </div> */
          //<li>{todo.title}</li> 
    }


export default TodoListItem;