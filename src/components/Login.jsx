import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
            <div className="title">Recipe Sharing</div>
            <form className=" loginForm">
              <input
                className="loginInput"
                name="Email"
                type="email"
                placeholder="E-mail"
              />
              <input
                className="loginInput"
                name="Password"
                type="password"
                placeholder="Password"
              />
              <button className="SignUp" name="SignUp">
                Log in
              </button>
               
               {/* OTP system */}
               <div className="OTPBoxDOM">
                <div className="OTPContainer">
                  <label className="OTPlabel">OTP Verification </label>  <input className="loginInput" placeholder="Enter OTP"    />
                </div>
                <input className="Submit" type="submit" value="Submit"  />
               </div>

                <div className="PasswordLoginContaniner">
                  <Link  className="alreadyAccound"> Forgot Password </Link>
                  <div >
                  Create an account? 
                  <Link to="/SignUp" className="SinupPageLogin" > Sign Up </Link>
                  </div>
                </div>
              
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
