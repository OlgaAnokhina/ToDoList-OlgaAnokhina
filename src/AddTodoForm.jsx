import React from 'react';

function AddTodoForm(props) {
    const handleAddTodo = (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        
        const todoTitle = event.target.elements.title.value;
        props.onAddTodo(todoTitle);// Извлекаем значение поля ввода
        console.log(todoTitle); // Выводим значение в консоль

        event.target.reset(); // Сбрасываем форму
    };
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" name="title" id="todoTitle" />
                      
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;