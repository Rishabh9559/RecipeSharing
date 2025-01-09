import React, { useEffect, useState } from "react";
import "./Home.css";

import { Link } from "react-router-dom";

function Home() {

  const [recipes, setRecipes] = useState({
      breakfast: [],
      lunch: [],
      snack: [],
      dinner: [],
    });
  
    const fetchRecipes = async (category, limit = 0) => {
      try {
        const response = await fetch(
          `http://localhost:8080/Recipe?Category=${category}${
            limit ? `&limit=${limit}` : ""
          }`
        );
        if (!response.ok) {
          throw new Error(`Error fetching ${category} recipes`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };
  
    useEffect(() => {
      const loadRecipes = async () => {
        const breakfast = await fetchRecipes("Breakfast", 8);
        const lunch = await fetchRecipes("Lunch", 8);
        const snack = await fetchRecipes("Snack", 8);
        const dinner = await fetchRecipes("Dinner", 8);
  
        setRecipes({ breakfast, lunch, snack, dinner });
      };
  
      loadRecipes();
    }, []);
  
  

    const RenderRecipeSection = (category, recipes) => {
      const categoryName = category.replace(" Recipes", "");
      console.log(category);
      return (
        <div className="BreakfastSection">
          <div className="BreakfastSectionTitleBox">
            <div className="BreakfastSectionTitle">{category}</div>
            <Link className="SeeMore" to={`/Food?category=${categoryName}`}>
              See More
            </Link>
          </div>
          <div className="BreakfastSectionImg">
            {recipes.map((recipe) => (
              <Link
                to={`/show/${recipe._id}`}
                className="BreakfastImgContainer"
                key={recipe._id}
              >
                <img
                  className="BreakfastSectionImgSize"
                  src={recipe.Imageurl}
                  alt={recipe.RecipeName}
                />
                <p className="RecipeName">{recipe.RecipeName}</p>
              </Link>
            ))}
          </div>
        </div>
      );
    };
    

    


  return (
    <>
      <div className="topRecipeTitle">
      
        
     

      {RenderRecipeSection("Breakfast Recipes",  recipes.breakfast)}

      { 
        RenderRecipeSection("Lunch Recipes",  recipes.lunch)
      }
      {RenderRecipeSection("Snack Recipes",  recipes.snack)}
      {RenderRecipeSection("Dinner Recipes", recipes.dinner)}



      </div>
    </>
  );
}

export default Home;
