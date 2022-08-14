import React, {useState} from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import "./style.css";

const Layout = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
  const [todo, setTodo] = useState([
  {
    id : 1,
    title : "운동",
    body : "플랭크하기",
    isDone: false

  }
]);

  const nextId = useRef(0);

  const handleSubmit = (text) => {
    // setTodos([...todos, text]);
    const todo = {
      id: nextId.current,
      title: title, 
      body :body
      checked: false,
    };
    setTodo(todo.concat(todo));
    nextId.current += 1; // nextId를 1씩 더하기
  };
//   const onChangeHandler = (event) => {
//   const inputTitle = event.target.value;
//   return setTitle(inputTitle)
//   };

//   const onChangeHandler2 = (event) => {
//   const inputBody = event.target.value;
//   return setBody(inputBody)
// };

// const onclick = () => {
//     setTodo([...todo, { id: todo.length + 1, title: title, body:body,idDone : false }])
//   };

  return (
    <div className="wrap">
      <Header />
     
      {/* <div>제목<input type="text" className="form_input" 
      onChange={onChangeHandler} value={title} 
      /></div>
      <div>내용<input type="text" className="form_input" 
      onChange={onChangeHandler2} value={body} 
      /></div>
      <div><button className="button" onClick={onclick}>추가</button></div>
       */}

      <Form onSubmit={handleSubmit}/>
      <List todo={todo} />
    </div>
  );
};

export default Layout;