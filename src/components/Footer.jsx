import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import "./Footer.css";

const Footer = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    setSuccessMessage("Query submitted successfully");
    reset();
    setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
    console.log(data);
  };

  return (
    <>
      <div className=" footer">
        <div className="footerContainer">
          <div className="about">
            <div className="aboutUs">
              Welcome to RecipeSharing —where food lovers unite! We’re a
              community-driven platform for sharing and discovering recipes from
              all over the world. Whether you’re a beginner or a pro in the
              kitchen, you’ll find inspiration, connect with other cooks, and
              explore a variety of delicious dishes. Join us, share your
              favorites, and let’s make cooking fun together!
              <p>
                Happy Cooking,
                <br />
                By Rishabh Kushwaha
              </p>
              <p>
                Contact <br />
                Email: Rishabhkushwaha9559@gmail.com
              </p>
            </div>
          </div>
          <div className="feedbackContainer">
            <div>
              Suggest and support us <br />
              to improve our site. <br />
              <br />
              write us your complaints
            </div>
            <form className="feedbackForm" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
              <textarea
                type="text"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
              <input className="feedbackSend" type="submit" value="Submit" />

              {successMessage && (
                <p className="error">{successMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="copyright">© 2024 RecipeSharing All right reserved</div>
      </div>
    </>
  );
};

export default Footer;
