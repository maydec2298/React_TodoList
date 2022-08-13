import "./style.css";

const Todo = (props) => {

  return (
    <div className="todo" >
      {props.todo.title}
      {props.todo.do}
    </div>
  );
};

export default Todo;