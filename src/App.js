import React, { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import todoStore from "./stores/todoStore";

function App () {
  const [todos, setTodos] = useState(todoStore.getTodos());  
  
  useEffect(() => {
    console.log('useEffect');  
    todoStore.addChangeListener('STORE_TODOS_CHANGE', onChange);
  }, []);

  function onChange() {  
    console.log('onChange', todoStore.getTodo());    
    localStorage.setItem("todos",JSON.stringify(todoStore.getTodo()));
    setTodos(todoStore.getTodos());

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3 mt-2">
          <div className="todos-app card">
            <TodoHeader />
            <div className="card-body">                
              <TodoList
                todos={todos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
