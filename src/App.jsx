import React from "react";
import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddRecipe from "./components/AddRecipe.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Show from "./components/Show.jsx";
import Food from "./components/Food.jsx";
import Root from "./Root.jsx";
import Profile from "./components/Profile.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "AddRecipe",
        element: <AddRecipe />,
      },
      {
        path: "Login",
        element: <Login />,
      },    

      {
        path: "Signup",
        element: <Signup />,
      },

      {
        path: "Show",
        element: <Show />,
      },

      {
        path: "Food",
        element: <Food />,
      },
      {
        path:"Profile",
        element:<Profile />
      }

    ],
  },
]);


function App() {


  return (
    <>
     <RouterProvider router={router} />

    </>
  );
}

export default App;
