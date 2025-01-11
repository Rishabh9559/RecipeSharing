import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Show.css";


const Show = () => {
  const [showRecipe, setshowRecipe] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("_id");
  const [erroShow, setErrorShow] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const getRecipe = await fetch(`http://localhost:8080/show?id=${id}`);

        if (!getRecipe.ok) {
          setErrorShow(recipeData.message);
          console.log(recipeData.message);
        }
        const recipeData = await getRecipe.json();
        setshowRecipe(recipeData);
      } catch (error) {
        console.log("catch error : ", error);
      }
    };
    if (id) {
      fetchRecipes();
    }
  }, [id]);

  console.log(" show ", showRecipe);

  return (
    <>
      <div className="ShowContainer">
        {showRecipe.length > 0 ? (
          showRecipe.map((showRecipe) => (
            <>
              <div className="RecipeNames"> {showRecipe.RecipeName} </div>
              <div className="ShowBox">
                <div className="Recipe">
                  <img className="RecipeImg" src={showRecipe.Imageurl} />
                </div>
                <div>
                  <div className="RecipeIngredients">
                    <h3>Ingredients </h3>
                    {showRecipe.Ingredients}
                  </div>
                  <div className="RecipeStep">
                    <h3>Instructions</h3>
                    {showRecipe.Instructions}
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <p className="error"> No Data found</p>
        )}
      </div>
    </>
  );
};

export default Show;
