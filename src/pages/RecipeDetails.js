import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe } = useContext(RecipeContext);

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ width: "300px" }} />}
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={() => navigate(`/edit-recipe/${recipe.id}`)}>Edit</button>
      <button onClick={() => { deleteRecipe(recipe.id); navigate("/"); }}>Delete</button>
    </div>
  );
}

export default RecipeDetails;
