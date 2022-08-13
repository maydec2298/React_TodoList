import React from "react";
import "./style.css"

const Form = () => {

  return (
    <div className='form_container'>

      <div>제목<input type="text" className="form_input" /></div>
      <div>내용<input type="text" className="form_input" /></div>
      <div><button className="button">추가하기</button></div>

    </div>
  )
};

export default Form;