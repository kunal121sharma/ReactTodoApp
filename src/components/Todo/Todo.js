import React from 'react'
import classes from './Todo.module.css';
const Todo = (props) => {
  return (
    <li className={classes.todo}>
        <input onChange={()=>props.markTodoCompleted(props.id)} type="checkbox" defaultChecked={props.completed}/>
        <span style={{textDecoration:props.completed?'line-through':'none'}}>{props.todoText}</span>
        <span onClick={()=>props.deleteTodo(props.id)} className={classes['icon']}>D</span>
    </li>
    
  )
}

export default Todo