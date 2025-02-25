import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      {recipe.image && <img src={recipe.image} alt={recipe.title} style={styles.image} />}
      <h3>{recipe.title}</h3>
      <button onClick={() => navigate(`/recipe/${recipe.id}`)}>View Details</button> {/* Use recipe.id */}

    </div>
    
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    margin: "10px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  }
};

export default RecipeCard;
