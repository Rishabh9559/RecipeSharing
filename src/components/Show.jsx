import React from "react";
import "./Show.css";
import panir from "../assets/Panir.jpg";

const Show = () => {
  return (
    <>
      <div className="ShowContainer">
        <div className="RecipeName">Matar Paneer</div>

        <div className="Recipe">
          <img className="RecipeImg" src={panir} />
          <div className="RecipeIngredients">
            <h3>Ingredients</h3>
            <ul>
              <li>Oil</li>
              <li>Paneer</li>
              <li>Ginger</li>
              <li>Cumin</li>
              <li>Turmeric</li>
              <li>Coriander</li>
              <li>Green Chilli</li>
              <li>Tomato</li>
              <li>Peas</li>
              <li>Garam Masala</li>
            </ul>
          </div>
        </div>

        <div className="RecipeStep">
          <h3>Instructions</h3>
          Heat the oil in a frying pan over high heat until it’s shimmering hot.
          Add the paneer, then turn the heat down a little. Fry until it starts
          to brown at the edges, then turn it over and brown on each side – the
          paneer will brown faster than you think, so don’t walk away. Remove
          the paneer from the pan and drain on kitchen paper. Put the ginger,
          cumin, turmeric, ground coriander and chilli in the pan, and fry
          everything for 1 min. Add the tomatoes, mashing them with the back of
          a spoon and simmer everything for 5 mins until the sauce smells
          fragrant. Add a splash of water if it’s too thick. Season well. Add
          the peas and simmer for a further 2 mins, then stir in the paneer and
          sprinkle over the garam masala. Divide between two bowls, top with
          coriander leaves and serve with naan bread, roti or rice
        </div>
      </div>
    </>
  );
};

export default Show;
