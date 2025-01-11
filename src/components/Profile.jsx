import React from "react";
import pic from "../assets/logo.png";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <div className="ProfileBox">
        <div className="ProfileDetail">
          <div className="userinfo">
            <img className="ProfileImg" src={pic} refs="pic" />
            <p className="UserName">
              User ID : rishabh
            </p>
          </div>
          <div >
            <input className="LogOut" type="button" placeholder="LogOut" value="LogOut" />
          </div>
        </div>
        <div className="divborder"/>

        <div className="PostList">
          <div className="Post">
            <img className="PostImg" src={pic} refs="recipe" />
            <p className="PostName"> logo </p>
          </div>
          <div className="Post">
            <img className="PostImg" src={pic} refs="recipe" />
            <p className="PostName"> logo </p>
          </div>
          <div className="Post">
            <img className="PostImg" src={pic} refs="recipe" />
            <p className="PostName"> logo </p>
          </div>
          <div className="Post">
            <img className="PostImg" src={pic} refs="recipe" />
            <p className="PostName"> logo </p>
          </div>


        </div>
      </div>
    </>
  );
}
