import React from 'react'
import "./style.css"
import Todo from "../todo/Todo";

const List = ({ todos, onRemove, onToggle }) => {



  return (
    <div className="list">

      <h2>Working 🔥</h2>
      <div className='todos'>
        {todos.map((todos) => {
          if (todos.isDone === false) {
            return (

              < Todo
                todos={todos}
                key={todos.id}
                onRemove={onRemove}
                onToggle={onToggle}
              />
            )
          }
        })
        }

      </div>
      <h2>Done🎉</h2>
      <div className='todos'>
        {todos.map((todos) => {
          if (todos.isDone === true) {
            return (

              < Todo
                todos={todos}
                key={todos.id}
                onRemove={onRemove}
                onToggle={onToggle}
              />
            )
          }
        })
        }

      </div>
    </div>
  );
};

export default List;