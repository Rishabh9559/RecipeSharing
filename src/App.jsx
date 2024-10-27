import React from "react";
import {createBrowserRouter} from 'react-rute-dom'
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";


function App() {


  return (
    <>
      <Header />
      <Home/>
    </>
  );
}

export default App;
