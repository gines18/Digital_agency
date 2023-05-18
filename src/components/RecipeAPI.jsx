import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecipeAPI.css";
import { TextField } from "@mui/material";

function Coffee() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("coffee");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: searchQuery },
      headers: {
        "X-RapidAPI-Key": "3305c8d758msh96587b8a3306f7ep1d1bafjsn300995769472",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      },
    };

    const fetchRecipes = async () => {
      const response = await axios.request(options);
      setRecipes(response.data.hits);
      console.log(response.data.hits);
    };
    fetchRecipes();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="search-bar" id="inspiration">
        <p>Get inspiration</p>
        <TextField
          type="text"
          onChange={handleSearch}
          id="outlined-basic"
          label="Search for ingredient ..."
          variant="outlined"
        />
      </div>

      <div className="coffee-container">
        {recipes.length > 0 &&
          recipes.slice(0, 4).map((recipe, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <div class="svg-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L24,80C48,128,96,224,144,256C192,288,240,256,288,224C336,192,384,160,432,133.3C480,107,528,85,576,101.3C624,117,672,171,720,186.7C768,203,816,181,864,149.3C912,117,960,75,1008,85.3C1056,96,1104,160,1152,202.7C1200,245,1248,267,1296,266.7C1344,267,1392,245,1416,234.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
              </div>

              <img
                src={recipe.recipe.image}
                className="card-img-top"
                alt="coffee-pot"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{recipe.recipe.label}</h5>
                <div className="Ingredients">
                  <p>Ingredients:</p>
                </div>
                <ul className="card-text">
                  {recipe.recipe.ingredients &&
                    recipe.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.text}</li>
                    ))}
                </ul>
                <div className="button">
                  <a
                    href={recipe.recipe.url}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default Coffee;
