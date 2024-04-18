import  { useState } from 'react';
import InputWithLabel from './InputWithLabel';
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
           <InputWithLabel
           
           value={todoTitle}
           onChange={handleTitleChange}
           >
            Title:
            </InputWithLabel>
            <button type="submit">Add</button>
            <hr />
        </form>
    );
}

export default AddTodoForm;