import React from "react";
import Form from "../form/Form";
import List from "../list/List";
import "./style.css";

const Layout = () => {
  // const [title, setTitle] = useState("");
  // const [willdo, setWilldo] = useState("");
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "운동",
  //     do: "플랭크 30초",
  //   },
  // ]);

  // const onChangeHandler = (event) => {
  //   const inputTitle = event.target.value;
  //   setTitle(inputTitle);
  // };

  // const onChangeHandler2 = (event2) => {
  //   const inputWilldo = event2.target.value;
  //   setWilldo(inputWilldo);
  // };

  // const onclick = () => {
  //   setTodos([...todos, { id: todos.length + 1, title: title, do: willdo }])
  // }

  return (
    <div className="wrap">
      <Form />
      <List />
    </div>
  )
};

export default Layout;