import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const [ForgotPasswordForm, setForgotPasswordForm] = useState(false);
  let [ForgotPassword, setForgotPassword] = useState("");
  let [ForgotPasswordError, setForgotPasswordError] = useState("");
  const [LoginForm, setLoginForm] = useState(true);
  const [LoginError, setLoginError] = useState("");

  let {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let onSubmit = async (data) => {
    console.log(data);
    try {
      const LoginResponse = await fetch("http://localhost:8080/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: watch("Email", ""),
          Password: watch("Password", ""),
        }),
      });
      const ResultLoginResponse = await LoginResponse.json();
      if (LoginResponse.ok) {
        console.log("login done", ResultLoginResponse.message);
        navigate("/");
      } else {
        console.log(ResultLoginResponse.message);
        setLoginError(ResultLoginResponse.message);
      }
    } catch (error) {
      console.log("login server", error);
    }
  };

  const onForgotPassword = () => {
    setLoginForm(false);
    setForgotPasswordForm(true);
  };

  const onForgotInputValue = async (event) => {
    setForgotPassword(event.target.value);
  };
  const onForgotPasswordForm =async () => {
    console.log(ForgotPassword);
    try{
      const ForgotPasswordResponse= await fetch("http://localhost:8080/ForgotPassword" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: ForgotPassword,
        }),
      })

      const ResultForgotdResponse= await ForgotPasswordResponse.json();
      if(ForgotPasswordResponse.ok){
        console.log(ResultForgotdResponse.message);
        setForgotPasswordError(ResultForgotdResponse.message);

      }
      else{
        console.log(ResultForgotdResponse.message);
        setForgotPasswordError(ResultForgotdResponse.message);

      }
    }
    catch(error){
      console.log("Forgot passsword ", error);
    }
  };

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
            {LoginForm && (
              <form className=" loginForm" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="loginInput"
                  name="Email"
                  type="email"
                  placeholder="E-mail"
                  {...register("Email", {
                    required: "Email required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.Email && (
                  <p className="signupError">{errors.Email.message} </p>
                )}
                <input
                  className="loginInput"
                  name="Password"
                  type="password"
                  placeholder="Password"
                  {...register("Password", { required: "Password required" })}
                />
                {errors.Password && (
                  <p className="signupError"> {errors.Password.message} </p>
                )}
                <input
                  type="submit"
                  className="SignUp"
                  placeholder="Login"
                  onClick={handleSubmit(onSubmit)}
                />
                {LoginError && <p className="signupError"> {LoginError} </p>}
                <div className="PasswordLoginContaniner">
                  <div className="alreadyAccound" onClick={onForgotPassword}>
                    {" "}
                    Forgot Password{" "}
                  </div>
                  <div>
                    Create an account?
                    <Link to="/SignUp" className="SinupPageLogin">
                      {" "}
                      Sign Up{" "}
                    </Link>
                  </div>
                </div>
              </form>
            )}

            {/* Forgot password */}
            {ForgotPasswordForm && (
              <div className="loginForm">
                <p>
                  {" "}
                  Enter the Email ID and Password will be send on your Mail.{" "}
                </p>

                <div className="OTPContainer">
                  <label className="OTPlabel">E-mail ID </label>{" "}
                  <input
                    className="loginInput"
                    placeholder="Enter Email ID"
                    value={ForgotPassword}
                    onChange={onForgotInputValue}
                  />
                </div>
                <input
                  className="Submit"
                  type="submit"
                  placeholder="Submit"
                  onClick={onForgotPasswordForm}
                />
                {ForgotPasswordError && <p className="resolve" > {ForgotPasswordError} </p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
