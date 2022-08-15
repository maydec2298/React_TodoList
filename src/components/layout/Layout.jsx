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


  return (
    <div className="wrap">
      <Header />
      <Form onClick={onclick} todos={todos} setTodos={setTodos} />
      <List todos={todos} />
    </div>
  );
};

export default Layout;