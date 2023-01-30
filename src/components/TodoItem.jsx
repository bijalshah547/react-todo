import { deleteTodo, completeTodo } from "../actions/todoActions";

function TodoItem (props) {    

  const handleDelete = () => {    
    if (window.confirm("Are you sure you want to Delete?") == true) {     
      deleteTodo(props.index)
    }    
  }

  const handleComplete = () => {
    completeTodo(props.index);
  }

  

  const _renderCheckbox = () => {    
    return (
      <div className="col-2">
        <input
          type="checkbox"
          className="form-control"
          onChange={handleComplete}          
          checked={props.todo.complete ? 'checked' : ''}
        />
      </div>
    );
  }

  const _renderTitle = () => {
    return (
      <div className="col-8 todo-item__title">
        <h3>{props.todo.title}</h3>
      </div>
    );
  }

  const _renderDelete = () => {
    return (     
      <div className="col-2 todo-item__title">
        <button className="btn btn-danger" type="button" onClick={handleDelete}>
          <span className="" style={{ fontSize: "24px", lineHeight: "16px"}}>
            x
          </span>
        </button>
      </div> 
    );
  }

  return (
    <li key={props.todo.id} id={`task-${props.todo.id}`} className="list-group-item todo-item">
      <div className="row">
        {_renderCheckbox()}
        {_renderTitle()}
        {_renderDelete()}
      </div>
    </li>
  );
}

export default TodoItem;
