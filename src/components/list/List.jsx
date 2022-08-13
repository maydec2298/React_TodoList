import "./style.css"
import Todo from "../todo/Todo";

const List = () => {
  return (
    <div className="list">
      <div>Working</div>
      <Todo />
      <div>Done</div>
      <Todo />
    </div>
  );
};

export default List;