import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

function RecipeDetails() {
  const { recipes, deleteRecipe } = useContext(RecipeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes[id];

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>

      <button onClick={() => navigate(`/edit-recipe/${id}`)} style={styles.button}>
        Edit Recipe
      </button>

      <button onClick={() => { deleteRecipe(id); navigate("/"); }} style={styles.deleteButton}>
        Delete Recipe
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
};

export default RecipeDetails;
