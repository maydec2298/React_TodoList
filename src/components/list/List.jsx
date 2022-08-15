import React from 'react'
import "./style.css"
import Todo from "../todo/Todo";

const List = ({ todos }) => {
  return (
    <div className="list">
      <div>
        <h2>Working</h2>
      </div>
      {todos.map((todos) => {
        return (

          < Todo
            todos={todos}
            key={todos.id}
          />
        )
      })}


      <h2>Done</h2>

    </div>
  );
};

export default List;