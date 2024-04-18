//import React from 'react';

import React, { useRef, useEffect } from 'react';
const InputWithLabel = ({ children, value, onChange }) => {
    // Создаем референс для элемента ввода
  const inputRef = useRef();
  useEffect(() => {
    // Проверяем, существует ли элемент и вызываем метод focus
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Пустой список зависимостей, чтобы эффект запускался один раз после монтирования компонента

  return (
    <React.Fragment>
    
    <label htmlFor="todoTitle">{children}</label>
            <input
            
            type="text"
            name="title"
            id="todoTitle"
            value={value} // Используем переданное значение через props
            onChange={onChange} 
            ref={inputRef}// Используем переданный обработчик через props
                 // Используем локальный обработчик для обновления значения
            />
    
    </React.Fragment>
  );
};

export default InputWithLabel;
/*type="text"
                name="title"
                id="todoTitle"
                value={todoTitle} // Используем локальное состояние для значения
                onChange={handleTitleChange}*/