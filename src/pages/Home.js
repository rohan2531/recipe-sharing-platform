import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../context/RecipeContext";

function Home() {
  const { recipes } = useContext(RecipeContext);

  return (
    <div style={styles.container}>
      <h2>Featured Recipes</h2>
      <div style={styles.recipeList}>
        {recipes.length === 0 ? (
          <p>No recipes added yet.</p>
        ) : (
          recipes.map((recipe, index) => <RecipeCard key={index} index={index} recipe={recipe} />)
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  recipeList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default Home;
