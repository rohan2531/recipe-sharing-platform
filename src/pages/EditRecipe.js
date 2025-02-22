import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

function EditRecipe() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes[id];

  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipes = [...recipes];
    updatedRecipes[id] = { title, ingredients, instructions };
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>Save Changes</button>
      </form>
      <button onClick={() => navigate("/")} style={styles.cancelButton}>Cancel</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "auto",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default EditRecipe;
