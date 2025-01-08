import { useState } from "react";
import React from "react";
import "./AddRecipe.css";
import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient.js";

const AddRecipe = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [AddRecipeError, setAddRecipeError] = useState("");
  const [image, setImage] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  let [url, setUrl] = useState("");
  const [imageError, setImageError] = useState(""); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setFilePreview(URL.createObjectURL(file));
      setImageError("");  
    }
  };

  const onSubmit = async (data) => {
   
    if (!image) {
      setImageError("Please select an image before submitting.");
      return;
    }

    try {
      const fileName = `${Date.now()}_${image.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("RecipeSharing")
        .upload(fileName, image);

      if (uploadError) {
        throw new Error("Error uploading image");
      }

      const { data: publicUrlData, error: publicUrlError } = supabase.storage
        .from("RecipeSharing")
        .getPublicUrl(fileName);

      if (publicUrlError) {
        throw new Error("Error getting public URL");
      }

      const imageUrl = publicUrlData.publicUrl;

     
      const AddRecipeResponse = await fetch("http://localhost:8080/Add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          RecipeName: watch("RecipeName"),
          Category: watch("Category"),
          Imageurl: imageUrl, 
          Ingredients: watch("Ingredients"),
          Instructions: watch("Instructions"),
        }),
      });

      const AddRecipeResponseResult = await AddRecipeResponse.json();
      if (AddRecipeResponse.ok) {
        setAddRecipeError(AddRecipeResponseResult.message);
      } else {
        setAddRecipeError(AddRecipeResponseResult.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setAddRecipeError("An error occurred while adding the recipe.");
    }
  };

  return (
    <div className="add-recipe-container">
      <form className="form-recipe" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title">Add Your Recipe</h2>

        <div className="recipe-box">
          <label>Recipe Name</label>
          <input
            className="input-box"
            placeholder="Enter Recipe Name"
            type="text"
            {...register("RecipeName", { required: "Enter Recipe Name" })}
          />
          {errors.RecipeName && (
            <p className="error"> {errors.RecipeName.message} </p>
          )}
        </div>

        <div className="recipe-box">
          <label>Category</label>
          <select
            className="input-box category-select"
            {...register("Category", { required: "Select Category" })}
            defaultValue=""
          >
            <option value="" disabled>
              Select Category
            </option>
            <option className="option" value="Breakfast">
              Breakfast
            </option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Dinner">Dinner</option>
          </select>
          {errors.Category && (
            <p className="error"> {errors.Category.message} </p>
          )}
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
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {filePreview && (
            <img
              className="recipe-img"
              src={filePreview}
              alt="Uploaded Recipe"
            />
          )}
          {imageError && <p className="error">{imageError}</p>} 
        </div>

        <div className="recipe-box">
          <label>Ingredients</label>
          <textarea
            className="input-box"
            placeholder="List ingredients here"
            {...register("Ingredients", { required: "List ingredients here" })}
          />
          {errors.Ingredients && (
            <p className="error"> {errors.Ingredients.message} </p>
          )}
        </div>

        <div className="recipe-box">
          <label>Instructions</label>
          <textarea
            className="input-box"
            placeholder="Describe cooking steps"
            {...register("Instructions", { required: "Write cooking steps" })}
          />
          {errors.Instructions && (
            <p className="error"> {errors.Instructions.message} </p>
          )}
        </div>

        <input
          type="submit"
          className="submit-button"
          placeholder="Submit Recipe"
        />
        {AddRecipeError && <p className="resolve"> {AddRecipeError} </p>}
      </form>
    </div>
  );
};

export default AddRecipe;
