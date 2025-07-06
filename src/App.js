import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  let initTodo = [];
try {
  const localData = localStorage.getItem("todos");
  if (localData) {
    initTodo = JSON.parse(localData);
  }
} catch (e) {
  console.error("Failed to parse todos from localStorage", e);
}



  const onDelete = (todo) => {
    console.log("I'm onDelete of todo", todo);
    // Deleteing this way is not work on the react
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
  }



  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
          <Header title="My Todos List" searchBar={false} />
        
        <Routes>
  <Route path='/' element={
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      minHeight: '85vh',
      padding: '40px 20px',
      fontFamily: 'Roboto, sans-serif',
      color: '#333',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      margin: '20px'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Manage Your Todos</h2>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  } />

  <Route path='/about' element={<About/>} />

  <Route path="*" element={
    <div style={{
      textAlign: 'center',
      padding: '80px 20px',
      fontFamily: 'Roboto, sans-serif',
      color: '#e74c3c',
      background: '#fff',
      borderRadius: '10px',
      margin: '40px',
      boxShadow: '0 0 15px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ fontSize: '2.5rem' }}>404 - Not Found</h2>
      <p style={{ color: '#777', fontSize: '1.2rem' }}>Oops! The page you're looking for doesn't exist.</p>
    </div>
  } />
</Routes>
        <Footer />

      </Router>
    </>
  );

}


export default App;
