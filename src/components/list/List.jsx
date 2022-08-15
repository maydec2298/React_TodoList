import React from 'react'
import "./style.css"
import Todo from "../todo/Todo";

const List = ({ todos, onRemove, onToggle }) => {


  // const showtrue = () => {
  //   for (let i = 0; i < todos.length; i++) {
  //     if (todos.isDone === false) {
  //       {
  //         todos.map((todos) => {
  //           return (

  //             < Todo
  //               todos={todos}
  //               key={todos.id}
  //               onRemove={onRemove}
  //               onToggle={onToggle}
  //             />
  //           )
  //         })
  //       }
  //     }
  //   }
  // }
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
            onRemove={onRemove}
            onToggle={onToggle}
          />
        )
      })}


      <h2>Done</h2>

    </div>
  );
};

export default List;