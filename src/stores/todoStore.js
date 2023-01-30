import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

class TodoStore extends EventEmitter {

    _todos = [];

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
        return this._todos;
    }

    getTodos() {
        let todos = localStorage.getItem("todos");    
        if( todos ) {
            this._todos = JSON.parse(todos);        
        }
        return this._todos;
    }

    addTodo(todo) {     
        this._todos.push(todo);        
        this.emitTodosChange();
    }

    deleteTodo(key) {
        this._todos.splice(key,1);        
        this.emitTodosChange();
    }

    completeTodo(index) {
        this._todos[index]['complete']=!this._todos[index].complete;        
        this.emitTodosChange();
    }      
}

function getTodoStore() {
    return new TodoStore();
}

const store = getTodoStore();

dispatcher.register((action) => {
    switch (action.actionType ) {
        case actionTypes.ADD_TODO:            
            store.addTodo(action.value);
            break;
        case actionTypes.DELETE_TODO:
            store.deleteTodo(action.key);
            break;
        case actionTypes.COMPLETE_TODO:
            store.completeTodo(action.key);
            break;
        default:
    }
    store.emitTodosChange();
});

export default store;