import React from "react";
import "./Footer.css";

const Footer = () => {
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
            <form className="feedbackForm">
              <input type="text" placeholder="Name" name="name" />
              <input type="email" placeholder="Email address" />
              <textarea type="text" placeholder="Message" />
              <button className="feedbackSend" type="submit">
                Send{" "}
              </button>
            </form>
          </div>
        </div>

        <div className="copyright">© 2024 RecipeSharing All right reserved</div>
      </div>
    </>
  );
};

export default Footer;
