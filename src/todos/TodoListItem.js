import React from "react";
import "./TodoListItem.css"

const TodoListItem = ({todo, onRemovePressed, onMarkAsCompleted}) => {
    console.log(todo);
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                {todo.isCompleted ? null :
                    <button className="completed-button"
                        onClick={() => onMarkAsCompleted(todo.text)}
                    >Mark as completed</button>
                }
                <button className="remove-button"
                        onClick={() => onRemovePressed(todo.text)}
                >Remove
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;