import React, { useState } from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import "./style.css";

const Layout = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "운동",
      body: "플랭크하기",
      isDone: false

    }
  ]);


  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        // if문 사용 시 코드
        // if (todo.id === id) {
        //   todo.checked = !todo.checked;
        // }
        // return todo;
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <div className="wrap">
      <Header />
      <Form onClick={onclick} todos={todos} setTodos={setTodos} />
      <List todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default Layout;