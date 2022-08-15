import React from 'react'
import "./style.css";

const Todo = ({ todos }) => {
  const { id, title, body, isDone } = todos;


  return (

    <div className="todobox">
      <div className="todotitle">{todos.title}</div>
      <div className="todobody">{todos.body}</div>
      <button className="button">삭제</button>
      <button className="button">완료</button>
      {/* <DoneButton>
        {checked ? 취소 : null}
      </DoneButton> */}
    </div>
  );
};

export default Todo;