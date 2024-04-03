import  { useState } from 'react';

function AddTodoForm({onAddTodo}) {
    // Добавляем переменную состояния для значения ввода
    const [todoTitle, setTodoTitle] = useState('');

    // Обновляем переменную состояния при каждом изменении ввода
    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const handleAddTodo = (event) => {
        event.preventDefault(); // Предотвращаем отправку формы
        if (!todoTitle.trim()) return; // Проверяем, не состоит ли ввод только из пробелов

        // Передаем объект с названием и уникальным идентификатором
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle(''); // Сбрасываем todoTitle в пустую строку
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                type="text"
                name="title"
                id="todoTitle"
                value={todoTitle} // Используем локальное состояние для значения
                onChange={handleTitleChange} // Используем локальный обработчик для обновления значения
            />
            <button type="submit">Add</button>
            <hr />
        </form>
    );
}

export default AddTodoForm;