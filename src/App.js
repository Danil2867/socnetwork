import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className='wrapper'>
    <Header/>
    <Navbar/>
    <Profile/>
    </div>
  );
}

export default App;

// Разделить по компонентам
// posts - post - post.jsx
// Что за props
