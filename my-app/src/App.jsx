import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";


const App = () => {
  
  return (
    <div>
    <Header  />
    <Navbar/>
    <Home />
    <Footer/>
    </div>
  )
}

export default App
