import React,{useRef}from 'react'
import classes from './Form.module.css';

const Form = (props) => {
    const todoInpRef=useRef();
    const formSubmithandler=(event)=>
    {

      event.preventDefault();
      console.log("submit");
      const newTodoText=todoInpRef.current.value;
      props.addTodo(newTodoText);
      console.log(todoInpRef.current.value);
      todoInpRef.current.value="";
      


    }
  return (
    <form onSubmit={formSubmithandler} className={classes.form}>
     <div className={classes['form-control']}>
     <label htmlFor="todo-inp">
        Add Todos
     </label>
     <input type="text" placeholder="Add new todos" id="todo-inp" ref={todoInpRef}    />




     </div>
     <button className={classes['form-btn']}> Add</button>






    </form>
  )
}

export default Form