import React from "react";
// import {createBrowserRouter} from 'react-rute-dom'
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Show from "./components/Show";
import AddRecipe from "./components/AddRecipe";



function App() {


  return (
    <>
      <Header />
      <Show/>
      <Footer/>
    </>
  );
}

export default App;
