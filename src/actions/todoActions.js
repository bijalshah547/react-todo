import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function addTodo(data) {   
    dispatcher.dispatch({
        actionType: actionTypes.ADD_TODO,
        value: data
    });
}

export function deleteTodo(key) {   
    dispatcher.dispatch({
        actionType: actionTypes.DELETE_TODO,
        key: key
    });
}

export function completeTodo(key) {
    dispatcher.dispatch({
        actionType: actionTypes.COMPLETE_TODO,
        key: key
    });
}
