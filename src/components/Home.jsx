import React from "react";
import "./Home.css";
import momo from "../assets/momo.png";
import panir from "../assets/Panir.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="HomeContainer">
        <div>
          <div className="topRecipeTitle">Top Recipe</div>

          <div className="TopRecipeContainer">
            <Link to="/show" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </Link>
            <Link to="/show" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </Link>
            <Link to="/show" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </Link>
            <Link to="/show" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </Link>
            <Link to="/show" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </Link>
            <Link to="/show" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </Link>
            <Link to="/show" className="TopRecipeImgHover">
              <img className="TopRecipeImg" src={momo} />
              <div className="TopRecipeName">Momo</div>
            </Link>
          </div>
        </div>

        {/* Brack Fast Recipes  */}

        <div className="BreakfastSection">
          <div className="BreakfastSectionTitleBox">
            <div className=" BreakfastSectionTitle">Breakfast Recipe </div>
            <Link className="SeeMore" to="/Food"> See More</Link>
          </div>
          <div className="BreakfastSectionImg">
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>

            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
          </div>
        </div>

        {/* Lunch */}

        <div className="BreakfastSection">
        <div className="BreakfastSectionTitleBox">
            <div className=" BreakfastSectionTitle">Lunch Recipe </div>
            <Link className="SeeMore" to="/Food"> See More</Link>
          </div>          
          <div className="BreakfastSectionImg">
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>

            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
          </div>
        </div>

        {/* Snack */}

        <div className="BreakfastSection">
        <div className="BreakfastSectionTitleBox">
            <div className=" BreakfastSectionTitle">Snack Recipe </div>
            <Link className="SeeMore" to="/Food"> See More</Link>
          </div>          <div className="BreakfastSectionImg">
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>

            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
          </div>
        </div>

        {/* dinner */}

        <div className="BreakfastSection">
        <div className="BreakfastSectionTitleBox">
            <div className=" BreakfastSectionTitle">Dinner Recipe </div>
            <Link className="SeeMore" to="/Food"> See More</Link>
          </div>          <div className="BreakfastSectionImg">
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>

            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
            <Link to="/show" className="BreakfastImgContainer">
              <img className="BreakfastSectionImgSize" src={panir} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
