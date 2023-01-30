import React, { useState } from "react";
import { addTodo } from "../actions/todoActions";

function TodoHeader () { 
  const [title, setTitle] = useState('');  
  
  const _onChangeTitle = (event) => {    
    setTitle(event.target.value)
  }

  const _onEnterPressAdd = (event) => {
    if (13 === event.keyCode) {
      _onClickAdd();
    }
  }

  const _onClickAdd = () => {    
    if(!title){
      alert('Please enter task details');
    }else{         
      addTodo({
        id: Date.now(),
        title: title,
        complete: false
      })
      setTitle('')
    }
  }

  
  return (
    <div className="todos-app-header card-header">
      <h2>ToDo</h2>
      <div className="input-group">
        <input
          type="text"
          name="title"
          placeholder="What do you need to do?"
          className="form-control add-new-todo"
          onChange={_onChangeTitle}
          onKeyDown={_onEnterPressAdd}
          value={title}
        />
        <div className="input-group-append">
          <button
            className="btn btn-success"
            type="button"
            onClick={_onClickAdd}
          >
            <span
              className=""
              style={{
                fontSize: "24px",
                lineHeight: "16px",
              }}
            >
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
  
}
export default TodoHeader;