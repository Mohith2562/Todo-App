import {useEffect, useOptimistic, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList';
import { fetchTodos,createTodo,updateTodo,deleteTodo } from './axios';

function App() {
  const[todos,setTodos]=useState([]);
  const[newtodo,setNewTodo]=useState({title:'',description:''});
  
  useEffect(()=>
    {
      loadTodos();
    },[]
  );

  const loadTodos=async ()=>{
    try{
      const response= await fetchTodos();
      setTodos(response.data);
    }
    catch(error){
      console.error("Error fetching todos",error);
    }
      
  };


  const addTodo=async()=>{
    try{
      const response=await createTodo({
        ...newtodo,completed:false
      });
      setTodos([...todos,response.data]);
      setNewTodo({title:'',description:''});
    }
    catch(error){
      console.error("Error fetching todos",error);
    }
  };

  const editTodo=async (id,updatedTodo)=>{
    try{
      const response= await updateTodo(id,updatedTodo);
      setTodos(todos.map(todo=> (todo.id=== id ? response.data: todo)))
    }
    catch(error){
      console.error("error updating todo",error);
    }
  };

  const removeTodo = async (id)=> {
    try{
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !=  id))
      //loadTodos();
      
    }
    catch(error){
      console.error("error deleting todo",error)
    }
  }

  const toggleTodo = async(id)=>{
    const todo = todos.find(t => t.id===id);
    if (!todo) {
      return;
    }

    const updated={...todo, completed:!todo.completed};
    await editTodo(id, updated);
  }

  /*function handleAddTodo(e){
    const newTodoObj={id:Date.now(),title:newtodo,completed:false}
    setTodos([...todos,newTodoObj]);
  }
  
  function handleDelete(id) {

    setTodos(todos.filter(todo=>todo.id !=id))
  
  }

  function handleToggle(id) {

    setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    
  }*/
  return(
    <div>
      <input type="text" placeholder='title' value = {newtodo.title} onChange={(e)=>setNewTodo({...newtodo,title:e.target.value})}></input>
      <input type="text" placeholder='description' value = {newtodo.description} onChange={(e)=>setNewTodo({...newtodo,description:e.target.value})}></input>
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} onDelete={removeTodo} onToggle={toggleTodo}></TodoList>

    </div>

  )
}



export default App
