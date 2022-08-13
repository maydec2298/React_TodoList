import React, { useState } from "react";
import Todo from "../todo/Todo";
import "./style.css"

const Form = () => {
  const [title, setTitle] = useState("");
  const [willdo, setWilldo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "운동",
      do: "플랭크 30초",
    },
  ]);

  const onChangeHandler = (event) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
  };

  const onChangeHandler2 = (event2) => {
    const inputWilldo = event2.target.value;
    setWilldo(inputWilldo);
  };

  const onclick = () => {
    setTodos([...todos, { id: todos.length + 1, title: title, do: willdo }])
  }


  return (
    <div className='form_container'>

      <div>제목<input type="text" className="form_input" onChange={onChangeHandler} value={title} /></div>
      <div>내용<input type="text" className="form_input" onChange={onChangeHandler2} value={willdo} /></div>
      <div><button className="button" onClick={onclick}>추가하기</button></div>

      <h3>Todo List</h3>

      <div className="todos-container">

        {todos.map((todo) => {
          console.log(todo)
          return (
            < Todo todo={todo} />
          );

          // <div className="todo" key={todo.id}>
          //   {todo.title}
          //   {todo.do}
          // </div>

        })};
      </div>

    </div>
  )
};

export default Form;