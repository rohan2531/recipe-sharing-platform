import React, { useState, useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

function AddRecipe() {
  const { addRecipe } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState({ title: "", ingredients: "", instructions: "" });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.title || !recipe.ingredients || !recipe.instructions) {
      alert("Please fill in all fields!");
      return;
    }
    addRecipe(recipe);
    setRecipe({ title: "", ingredients: "", instructions: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={recipe.ingredients}
          onChange={handleChange}
          style={styles.textarea}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={handleChange}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Add Recipe</button>
      </form>
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
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    height: "100px",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
};

export default AddRecipe;
