import React from "react";
import "./Home.css";
import momo from "../assets/momo.png";
import panir from "../assets/Panir.jpg";

function Home() {
  return (
    <>
      <div className="HomeContainer">
        <div>
          <div className="topRecipeTitle">Top Recipe</div>

          <div className="TopRecipeContainer">
            <a href="" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </a>
            <a href="" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </a>
            <a href="" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </a>
            <a href="" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </a>
            <a href="" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </a>
            <a href="" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </a>
            <a href="" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </a>
          </div>
        </div>

        {/* Brack Fast Recipes  */}

        <div className="BreakfastSection">
          <div className="BreakfastSectionTitle">Breakfast Recipe</div>
          <div className="BreakfastSectionImg">
            
            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>

            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>
            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>
            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>
            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>
            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>
            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>
            <a href="" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
