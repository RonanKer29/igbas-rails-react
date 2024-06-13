import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "/home/kinkin/code/igbas-rails-react/client/constants.js";

function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  // fetch recipes from the API
  useEffect(() => {
    // code to fetch recipes
    async function loadRecipes() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setRecipes(json);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        setError("An error has occurred");
        console.log("An error has occurred", error);
      } finally {
        setLoading(false);
      }
    }
    loadRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-container">
          <h2>{recipe.title}</h2>
          <p>{recipe.recipe_description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
