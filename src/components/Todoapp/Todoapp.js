import React,{useState} from 'react'
import classes from  './Todoapp.module.css'
import Todolist from '../Todolist/Todolist'
import Form from '../Form/Form'
import {v4 as uuid} from 'uuid';

const Todoapp = () => {
    const initialtodos=[
     {
        id:'3145',
        task:'go to gym',
        completed:false




     },
     {
        id:'3145',
        task:'go to market',
        completed:false




     },
     {
        id:'3145',
        task:'go to class',
        completed:false




     },





    ]
    const[todos,setTodos]=useState(initialtodos);
    const addTodo=(newTodoText)=>
    {
      setTodos((prevState)=>{
 return [...prevState,{id:uuid(),task:newTodoText,completed:false}]


      })
     
    }
    const deleteTodo=(todoid)=>
    {
      setTodos((prevState)=>{
         return prevState.filter((todo)=>todo.id!==todoid);



      })




    }
    const markTodoCompleted=(todoid)=>
    {
      setTodos((prevState)=>{

         return prevState.map((todo)=>todo.id===todoid ?{...todo,completed:!todo.completed}:todo)
      })
      




    }
    
  return (
<section className={classes['todo-app']}>
   <Form addTodo={addTodo}/>
    <Todolist  todos={todos} 
      deleteTodo={deleteTodo}
      markTodoCompleted={markTodoCompleted}
    />
</section>
  )
}

export default Todoapp