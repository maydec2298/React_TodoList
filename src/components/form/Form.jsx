import React, { useState } from "react";
import "./style.css"

const Form = ({ todos, setTodos }) => {


  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeHandler = (event) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
  };

  const onChangeHandler2 = (event) => {
    const inputBody = event.target.value;
    setBody(inputBody);
  };

  const onclick = () => {
    setTodos([...todos, { id: todos.length + 1, title: title, body: body, idDone: false }])
  };
  return (
    <div className='form_container'>

      <div>제목<input type="text" className="form_input" onChange={onChangeHandler} value={title} /></div>
      <div>내용<input type="text" className="form_input" onChange={onChangeHandler2} value={body} /></div>
      <input type="submit" className="button" onClick={onclick} value="추가하기"></input>




      {/* 
        {todos.map((todo) => {
         
          return (
            < Todo todo={todo} />
          );

          // <div className="todo" key={todo.id}>
          //   {todo.title}
          //   {todo.do}
          // </div>

        })}; */}


    </div>
  )
};

export default Form;