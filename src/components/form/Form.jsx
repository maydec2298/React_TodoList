import React , {useState} from "react";
import "./style.css"

const Form = ({todo}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "운동",
  //     do: "플랭크 30초",
  //   },
  // ]);

  const onChangeHandler = (event) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
  };

  const onChangeHandler2 = (event) => {
    const inputBody = event.target.value;
    setBody(inputBody);
  };

  // const onclick = ({todo}) => {
  //   setTodo([...todo, { id: todo.length + 1, title: title, body :body }])
  // }


  return (
    <div className='form_container'>
        
      <div>제목<input type="text" className="form_input"  onChange={onChangeHandler} value={title}/></div>
      <div>내용<input type="text" className="form_input"  onChange={onChangeHandler2} value={body}/></div>
      <input type="submit" className="button" onClick={handleSubmit} value="추가하기"></input>

      
       
     
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