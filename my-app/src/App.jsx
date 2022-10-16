import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/header";
import Home from "./pages/Home/Home"


const App = () => {
  
  return (
    <div>
    <Header/>
    <Navbar/>
    <Home/>
    </div>

  )
}

export default App
