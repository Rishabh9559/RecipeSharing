import React from 'react';
import './Food.css';
import panir from "../assets/Panir.jpg";
import { Link } from 'react-router-dom';

const Food = () => {
  return (
    <div className="breakfast-section">
      <h2 className="breakfast-section-title">Breakfast Recipes</h2>
      <div className="breakfast-section-img">
        {[...Array(5)].map((_, index) => (
          <Link key={index} to="Show" className="breakfast-img-container">
            <img className="breakfast-section-img-size" src={panir}  />
            <p>Matar Paneer</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Food;
