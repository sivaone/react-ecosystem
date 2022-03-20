import React, {useEffect} from "react";
import {connect} from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {loadTodos, removeTodoRequest} from "./thunks";
import { markAsCompleted} from "./actions";
import {
    getTodos,
    getTodosLoading,
    getIncompleteTodos,
    getCompletedTodos
} from "./selectors";
import "./TodoList.css"

const TodoList = ({completedTodos, incompleteTodos, onRemovePressed, onMarkAsCompleted, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;

    const content = (
        <div className="list-wrapper">
            <NewTodoForm/>
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => <TodoListItem
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onMarkAsCompleted={onMarkAsCompleted}/>)
            }
            <h3>Completed:</h3>
            {completedTodos.map(todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onMarkAsCompleted={onMarkAsCompleted}/>)
            }
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onMarkAsCompleted: text => dispatch(markAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);