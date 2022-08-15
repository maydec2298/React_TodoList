import React from 'react'
import "./style.css";

const Todo = ({ todos, onRemove, onToggle }) => {
  const { id, title, body, isDone } = todos;


  return (
    <div>


      <div className="todobox">
        <div className="todotitle">{todos.title}</div>
        <div className="todobody">{todos.body}</div>
        <button className="button" onClick={() => onRemove(id)}>삭제</button>
        <button className="button" onClick={() => onToggle(id)}>
          {isDone ? "취소" : "완료"}</button>



      </div>
    </div>
  );
};

export default Todo;