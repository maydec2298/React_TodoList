import React from "react";
import "./style.css"

const Form = () => {
  const [title, setTitle] = useState("")

  const onChangeHandler = (event) => {
    const inputTitle = event.target.title;
    setTitle(inputTitle);
  };
  console.log(title)

  return (
    <div className='form_container'>

      <div>제목<input type="text" className="form_input" onChange={onChangeHandler} value={title} /></div>
      <div>내용<input type="text" className="form_input" /></div>
      <div><button className="button">추가하기추가추가</button></div>

    </div>
  )
};

export default Form;