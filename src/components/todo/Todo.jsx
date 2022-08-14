import React from 'react'
import "./style.css";

const Todo = ({todo}) => {
  const {id, title, body, isDone} = todo;

 
  return (
    
    <div className="todobox">
      <div className="todotitle">{todo.title}</div>
      <div className="todobody">{todo.body}</div>
      <button className="button">삭제</button>
      <button className="button">완료</button>
    </div>
  );
};

export default Todo;