import React, { useState, useEffect } from "react";
import axios from 'axios'
import './RecipeAPI.css'
import { TextField } from '@mui/material';

function Coffee() {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('coffee');
  
useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: {q: searchQuery},
      headers: {
        'X-RapidAPI-Key': '3305c8d758msh96587b8a3306f7ep1d1bafjsn300995769472',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };

const fetchRecipes = async () => {
    
    const response = await axios.request(options);
    setRecipes(response.data.hits);
    console.log(response.data.hits)
  };
  fetchRecipes();
}, [searchQuery]);

const handleSearch = (event) => {
  setSearchQuery(event.target.value);
}

return(
    <>

    <div className="search-bar">
      <p>Get inspiration</p>
      <TextField type="text" onChange={handleSearch} id="outlined-basic" label="Search" variant="outlined" />
       {/* <input type="text" placeholder="Search for recipes..." onChange={handleSearch} />  */}
      </div>

    <div className="coffee-container">
      {recipes.length > 0 && recipes.slice(0, 4).map(recipe => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={recipe.recipe.image} className="card-img-top" alt="coffee-pot"></img>
          <div className="card-body">
            <h5 className="card-title">{recipe.recipe.label}</h5>
            <div className="Ingredients">
              <p>Ingredients:</p>
            </div>
            <ul className="card-text">
              {recipe.recipe.ingredients && recipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <a href={recipe.recipe.url} className="btn btn-secondary" target="_blank" rel="noreferrer">Find out more</a>
          </div>
        </div>
      ))}
    </div>
  </>

);
}


export default Coffee;