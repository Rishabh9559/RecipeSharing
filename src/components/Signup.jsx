import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="main">
        <div className="img_container">
          <div className="trasparent">
          <div className="img_text">
            
              Welcome to Recipe Sharing Application! Discover a world of flavors
              and culinary inspiration by joining our recipe-sharing community.
              Whether you're a seasoned chef or just starting your cooking
              journey, we believe everyone has something delicious to share.
              <ul className=" ">
                <li>Explore recipes from different cultures and cuisines.</li>
                <li>
                  Create your personalized cookbook by saving your favorite
                  recipes.
                </li>
                <li>
                  Share your culinary creations and get feedback from fellow
                  food lovers.
                </li>
                <li>
                  Connect with a vibrant community passionate about food,
                  cooking, and creativity.
                </li>
              </ul>
              Let’s cook, share, and inspire each other. Join us today and bring
              your recipes to life!
            
          </div>
          </div>
        </div>

        <div className="login_container ">
          <div className="login">
            
            <div className="title">
              Recipe Sharing
            </div>
            <form className=" loginForm">
              <input className="loginInput" name="FirstName" type="text" placeholder="First Name"/>
              <input className="loginInput" name='LastName' type='text' placeholder='Last Name'/>
              <input className="loginInput" name="Email" type="email" placeholder="E-mail"/>
              <input className="loginInput" name="Password" type="password" placeholder="Password"/>
              <input className="loginInput" name="ConformPassword" type="text" placeholder="Conform Password"/>
                <button className="SignUp" name="SignUp">
                  Sign up
                </button>
             
            </form>
            <div className="alreadyAccound">
            Have an account? 
            <Link to="Login" className="SinupPageLogin" > Log in </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
