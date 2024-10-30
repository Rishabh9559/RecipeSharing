import { useState } from 'react';
import React from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(''); // State for category selection

  function handleImageUpload(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="add-recipe-container">
      <form className="form-recipe">
        <h2 className="form-title">Add Your Recipe</h2>

        <div className="recipe-box">
          <label>Recipe Name</label>
          <input className="input-box" placeholder="Enter Recipe Name" type="text" name="recipeName" />
        </div>

        <div className="recipe-box">
          <label>Category</label>
          <select
            className="input-box category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option  value="" disabled>Select Category</option>
            <option className='option' value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        <div className="recipe-box image-upload-box">
          <label htmlFor="addImg" className="custom-file-upload">
            Upload Image
          </label>
          <input
            className="upload-recipe-img"
            type="file"
            id="addImg"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          {file && <img className="recipe-img" src={file} alt="Uploaded Recipe" />}
        </div>

        <div className="recipe-box">
          <label>Ingredients</label>
          <textarea
            className="input-box"
            placeholder="List ingredients here"
            name="ingredients"
          />
        </div>

        <div className="recipe-box">
          <label>Instructions</label>
          <textarea
            className="input-box"
            placeholder="Describe cooking steps"
            name="instructions"
          />
        </div>

        <button type="submit" className="submit-button">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
