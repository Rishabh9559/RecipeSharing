import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Food.css";
import { Link } from "react-router-dom";

const Food = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/Recipe?Category=${category}`
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

    if (category) {
      fetchAllRecipes();
    }
  }, [category]);

  console.log(recipes);

  return (
    <div className="breakfast-section">
      <h2 className="breakfast-section-title">{category} Recipes</h2>
      <div className="BreakfastSectionImg">

        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link
            to={`/show/${recipe._id}`}
              key={recipe._id}
              className="BreakfastImgContainer"
            >
              <img
                 className="BreakfastSectionImgSize"
                src={recipe.Imageurl}
                alt={recipe.RecipeName}
              />
             <p className="RecipeName">{recipe.RecipeName}</p>
            </Link>
          ))
        ) : (
          <p>No recipes available</p>
        )}

      </div>
    </div>
  );
};

export default Food;
