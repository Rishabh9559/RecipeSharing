import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    < >
      <div className="header">
        <div className="container1">
          <div className="logo">
            
              <img className="img" src={logo} alt="Logo" />
              <h3>RecipeSharing</h3>
            
          </div>
          <Link to="/" className="home">Home</Link>
          <div
            className="category-container"
            onMouseEnter={showMenu}
            onMouseLeave={hideMenu}
          >
            <button className="category" type="button">
            &#9776; Category
            </button>
           
            {isMenuVisible && (
              <ul className="menu">
                <li className="list">
                  <Link to="Food">Breakfast</Link>
                </li>
                <li className="list">
                  <Link to="Food">Lunch</Link>
                </li>
                <li className="list">
                  <Link to="Food">Snack</Link>
                </li>
                <li className="list">
                  <Link to="Food">Dinner</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="search">
            <input
              className="Inputsearch"
              type="search"
              name="search"
              placeholder="Search"
            />
<button className="btcSearch">
  <svg className="svg" viewBox="0 0 1024 1024">
    <path d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
  </svg>
</button>
          </div>
        </div>

        <div className="container2">
          <Link className="Addrecipe" to="AddRecipe">
            Add Recipe &#10009;
          </Link>

          <Link to="Signup" className="profile_container">
            <p className="profile" to=" ">
              Profile
            </p>
            <img className="user" src={user} alt="User" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
