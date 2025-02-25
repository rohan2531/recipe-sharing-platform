import React, { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  //localStorage.removeItem("recipes");

  // Load recipes from localStorage
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // Save recipes to localStorage whenever they change
  useEffect(() => {
    console.log("Saving to localStorage:", recipes); // Debugging step
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  // Add Recipe
  const addRecipe = (recipe) => {
    const newRecipe = { ...recipe, id: Date.now() }; // Assign a unique ID
    setRecipes([...recipes, newRecipe]);
  };

  // Edit Recipe
  const editRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
  };

  // Delete Recipe
  const deleteRecipe = (id) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(filteredRecipes);
  };

  const clearRecipes = () => {
    localStorage.removeItem("recipes");
    setRecipes([]); // Clear state as well
  };
  

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, editRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
