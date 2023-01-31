import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
 
var _todos = [];

class TodoStore extends EventEmitter {

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    emitTodosChange() {
      this.emit('STORE_TODOS_CHANGE');
    }

    getTodo() {    
        return _todos;
    }

    getTodos() {
        let todos = localStorage.getItem("todos");    
        if( todos ) {
            _todos = JSON.parse(todos);        
        }
        return _todos;
    }
      
}

function getTodoStore() {
    return new TodoStore();
}

const store = getTodoStore();

function addTodo(todo) { 

    _todos.push(todo);        
    store.emitTodosChange();
}

function deleteTodo(key) {
    _todos.splice(key,1);        
    store.emitTodosChange();
}

function completeTodo(index) {
    _todos[index]['complete']=!_todos[index].complete;        
    store.emitTodosChange();
}

dispatcher.register((action) => {
    switch (action.actionType ) {
        case actionTypes.ADD_TODO:            
            addTodo(action.value);
            break;
        case actionTypes.DELETE_TODO:
            deleteTodo(action.key);
            break;
        case actionTypes.COMPLETE_TODO:
            completeTodo(action.key);
            break;
        default:
    }
});

export default store;