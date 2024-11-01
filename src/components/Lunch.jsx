import React from 'react';
import './Food.css';
import panir from "../assets/Panir.jpg";

const Lunch = () => {
  return (
    <div className="breakfast-section">
      <h2 className="breakfast-section-title">Breakfast Recipes</h2>
      <div className="breakfast-section-img">
        {[...Array(5)].map((_, index) => (
          <a key={index} href="#" className="breakfast-img-container">
            <img className="breakfast-section-img-size" src={panir} alt={`Breakfast ${index + 1}`} />
            <p>Matar Paneer</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Lunch;
