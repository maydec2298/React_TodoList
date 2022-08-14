import React from 'react'
import "./style.css"
import Todo from "../todo/Todo";

const List = ({todo}) => {
  return (
    <div className="list">
      <h2>Working</h2>

      {todo.map((todo) => {
        return(
      <Todo 
      todo ={todo}
      key = {todo.id}
      />
        )
      })}
     
      
<h2>Done</h2>

    </div>
  );
};

export default List;