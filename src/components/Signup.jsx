import React, { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate();
  let [SignupForm,setSignupForm]=useState(true);
    let [errorSignup,setErrorSignup]=useState("");
  let [otpForm,setOtpForm]=useState(false);
  let [otpInputValue,setOtpInputValue]=useState("");
  let [otp,setOtp]=useState("");

  let {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Password = useRef({});
  Password.current = watch("Password", "");

  let onSubmit = async (data) => {
    console.log(data);

    try {
      const SignUpResponse = await fetch("http://localhost:8080/SignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          FirstName: watch("FirstName", ""),
          LastName: watch("LastName", ""),
          Email: watch("Email", ""),
          Password: watch("Password", ""),
        }),
        
      });

      const ResultSignUpResponse =await SignUpResponse.json();
      if(SignUpResponse.ok){
          console.log( " SignUp done ");
          console.log(ResultSignUpResponse.message)
          setOtp(ResultSignUpResponse.message);
          console.log(otp);
          setSignupForm(false);
          setOtpForm(true);
      }
      else{
          console.log(ResultSignUpResponse.message)
          setErrorSignup(ResultSignUpResponse.message);
      }

    } catch (error) {
      console.log("SignUp error :", error);
    }
  };

  let onClickOTP= (event)=>{
    
    setOtpInputValue(event.target.value);
    
  }

  let OTPSubmit = () => {
    if (otpInputValue === otp) {
      console.log(`Otp input: ${otpInputValue} and mail OTP: ${otp}`);
      navigate("/Login");
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

         {SignupForm&& <form className=" loginForm" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="loginInput"
                type="text"
                placeholder="First Name"
                {...register("FirstName", { required: "First Name required" })}
              />
              {errors.FirstName && (
                <p className="signupError">{errors.FirstName.message} </p>
              )}
              <input
                className="loginInput"
                type="text"
                placeholder="Last Name"
                {...register("LastName", { required: "Last Name required" })}
              />
              {errors.LastName && (
                <p className="signupError">{errors.LastName.message} </p>
              )}
              <input
                className="loginInput"
                type="email"
                placeholder="E-mail"
                {...register("Email", {
                  required: "E-mail required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.Email && (
                <p className="signupError">{errors.Email.message}</p>
              )}
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                {...register("Password", { required: "Password required" })}
              />
              {errors.Password && (
                <p className="signupError">{errors.Password.message}</p>
              )}
              <input
                className="loginInput"
                type="text"
                placeholder="Conform Password"
                name="ConformPassword"
                {...register("ConformPassword", {
                  required: "Conform Password required",
                  validate: (value) =>
                    value === Password.current || "The passwords do not match",
                })}
              />
              {errors.ConformPassword && (
                <p className="signupError">{errors.ConformPassword.message}</p>
              )}

              <input
                className="SignUp"
                type="submit"
                value="Sign Up"
                placeholder="Sign Up"
                
                
              />
              {errorSignup && <p className="signupError"> {errorSignup} </p>}

              <div className="PasswordLoginContaniner">
                <div className="alreadyAccound">
                  Have an account?
                  <Link to="/Login" className="SinupPageLogin">
                    {" "}
                    Log in{" "}
                  </Link>
                </div>
              </div>
            </form> }

              {/* otp function */}
          {otpForm &&   <div className=" loginForm"  >  
              <div className="OTPBoxDOM">
                <div className="OTPContainer">
                  <label className="OTPlabel">OTP Verification </label>
                  <input className="loginInput" placeholder="Enter OTP" value={otpInputValue} onChange={onClickOTP}    />
                </div>
                <input className="Submit" type="submit" placeholder="Submit" onClick={OTPSubmit}  />
              </div>
            </div> }

          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
