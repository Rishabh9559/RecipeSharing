import React from "react";
import { useState } from "react";
// import {createBrowserRouter} from 'react-rute-dom'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Show from "./components/Show";
import AddRecipe from "./components/AddRecipe";
import Lunch from "./components/Lunch";


function App() {


  return (
    <>
      <Header />
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
