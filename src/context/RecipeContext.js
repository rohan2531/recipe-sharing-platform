import React, { createContext, useState, useEffect } from "react";

// Create Recipe Context
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  // Load recipes from local storage (if available)
  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem("recipes");
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  });

  // Save recipes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  // Add a new recipe
  const addRecipe = (recipe) => {
    const updatedRecipes = [...recipes, recipe];
    setRecipes(updatedRecipes);
  };

  // Edit an existing recipe
  const updateRecipe = (index, updatedRecipe) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[index] = updatedRecipe;
    setRecipes(updatedRecipes);
  };

  // Delete a recipe
  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, updateRecipe, deleteRecipe, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
