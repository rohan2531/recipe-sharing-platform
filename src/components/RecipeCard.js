import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, index }) {
  return (
    <div style={styles.card}>
      <h3>{recipe.title}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients.substring(0, 30)}...</p>
      <Link to={`/recipe/${index}`} style={styles.button}>View Details</Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default RecipeCard;
