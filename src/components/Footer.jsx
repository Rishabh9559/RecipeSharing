import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./Footer.css";

const Footer = () => {
  const [successMessage, setSuccessMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let onSubmit = async (data) => {
    try {
        const response = await fetch("http://localhost:8080/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "Rishabhkushwaha9559@gmail.com",
                subject: `Feedback from ${data.name}`,
                text: `Email: ${data.email}\nMessage: ${data.message}`,
                html: `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                `,
            }),
        });

        const result = await response.json();
        if (response.ok) {
            setSuccessMessage("Your message has been sent successfully!");
            reset();
            setTimeout(() => setSuccessMessage(""), 3000);
        } else {
            throw new Error(result.error || "Failed to send email.");
        }
    }
    catch (error) {
        setErrorMessage(`Error: ${error.message}`);
        setTimeout(() => setErrorMessage(""), 3000);
    }
};


  return (
    <>
      <div className="footer">
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
              Write us your complaints
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

              {successMessage && <p className="resolve">{successMessage}</p>}
              {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
          </div>
        </div>

        <div className="copyright">© 2024 RecipeSharing All right reserved</div>
      </div>
    </>
  );
};

export default Footer;
