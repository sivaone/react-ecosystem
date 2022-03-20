import React, {useEffect} from "react";
import {connect} from "react-redux";
import NewTodoForm from "./NewTodoForm";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import {loadTodos, removeTodoRequest} from "./thunks";
import { markAsCompleted} from "./actions";
import {
    getTodosLoading,
    getIncompleteTodos,
    getCompletedTodos
} from "./selectors";


const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`


const TodoList = ({completedTodos, incompleteTodos, onRemovePressed, onMarkAsCompleted, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;

    const content = (
        <ListWrapper>
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
        </ListWrapper>
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