import React, { useEffect, useState } from "react";
import pic from "../assets/profile_Pic.png";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
    const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:8080/profile", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          navigate("/Login");
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);


 useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/post?UserID=${user.UserID}`
        );
        if (!response.ok) {
          throw new Error("Error fetching recipes");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      fetchAllRecipes();
    }
  }, [user]);



  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Logged out successfully");
        window.location.href = "/login";
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out", error);
    }
    console.log("Logout functionality to be implemented");
  };

  return (
    <>
      <div className="ProfileBox">
        <div className="ProfileDetail">
          <div className="userinfo">
            <img className="ProfileImg" src={pic} alt="Profile" />
            {user ? (
              <>
                <p className="UserName">User ID: {user.UserID}</p>
                <p className="UserName">
                  Name: {user.FirstName} {user.LastName}
                </p>
                <p className="UserName">Email: {user.Email}</p>
              </>
            ) : (
              <p className="UserName">{error || "Loading..."}</p>
            )}
          </div>
          <div>
            <input
              className="LogOut"
              type="button"
              value="LogOut"
              onClick={handleLogout}
            />
          </div>
        </div>
        <div className="divborder" />

        <div className="PostList">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Link
                to={`/show?_id=${recipe._id}`}
                key={recipe._id}
                className="Post"
              >
                <img
                  className="PostImg"
                  src={recipe.Imageurl}
                  alt={recipe.RecipeName}
                />
                <p className="PostName">{recipe.RecipeName}</p>
              </Link>
            ))
          ) : (
            <p>No Recipes Post Available</p>
          )}
        </div>
      </div>
    </>
  );
}
