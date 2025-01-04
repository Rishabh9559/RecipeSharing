import { useState } from 'react';
import React from 'react';
import './AddRecipe.css';
import { useForm } from 'react-hook-form';


const AddRecipe = () => {

  const {register,watch,handleSubmit,formState:{errors}, }=useForm();

  const SelectCategory=watch("Category","");
  const imgfile=watch("UploadImage","");

  const [filePreview, setFilePreview] = useState(null);
  const watchFile = watch("UploadImage","");
  React.useEffect(() => {
    if (watchFile && watchFile[0]) {
      setFilePreview(URL.createObjectURL(watchFile[0]));
    }
  }, [watchFile]);

  const onSubmit=(data)=>{
      console.log(data);
  }




  return (
    <div className="add-recipe-container">

      <form className="form-recipe" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title">Add Your Recipe</h2>

        <div className="recipe-box">
          <label>Recipe Name</label>
          <input className="input-box" placeholder="Enter Recipe Name" type="text"  {...register("RecipeName",{required:"Enter Recipe Name"} )} />
          {errors.RecipeName && <p className='AddRecipeError'> {errors.RecipeName.message} </p>}         
        </div>

        <div className="recipe-box">
          <label>Category</label>
          <select className="input-box category-select" {...register("Category", {required:"Select Category"})}  defaultValue="" >
            <option  value="" disabled>Select Category</option>
            <option className='option' value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Dinner">Dinner</option>
          </select>
          {errors.Category && <p className='AddRecipeError'> {errors.Category.message} </p>}
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
            
            {...register("UploadImage",{required:"Upolad Image"})}

          />
           {filePreview &&  <img className="recipe-img" src={filePreview} alt="Uploaded Recipe"   />   }
           {errors.UploadImage && <p className='AddRecipeError'> {errors.UploadImage.message} </p>}
        </div>

        <div className="recipe-box">
          <label>Ingredients</label>
          <textarea className="input-box" placeholder="List ingredients here" {...register("Ingredients",{required:"List ingredients here"})}    />
          {errors.Ingredients && <p className='AddRecipeError'> {errors.Ingredients.message} </p>}
        </div>

        <div className="recipe-box">
          <label>Instructions</label>
          <textarea
            className="input-box"
            placeholder="Describe cooking steps"
           {...register("Instructions",{required:"Write cooking steps"})}
          />
          {errors.Instructions && <p className='AddRecipeError'> {errors.Instructions.message} </p>}
        </div>

        <input type="submit" className="submit-button" placeholder='Submit Recipe' onClick={handleSubmit(onSubmit)} />
      </form>

    </div>
  );
};

export default AddRecipe;
