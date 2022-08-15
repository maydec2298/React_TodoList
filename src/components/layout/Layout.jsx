import React, { useState } from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import "./style.css";

const Layout = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "코딩",
      body: "리액트 공부하기",
      isDone: false

    }
  ]);

  //완료 취소 버튼
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

  //삭제하기
  const onRemove = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <div className="wrap">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} onRemove={onRemove} onToggle={onToggle} />

    </div>
  );
};

export default Layout;