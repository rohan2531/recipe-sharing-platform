import React, { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, editRecipe } = useContext(RecipeContext);

  const existingRecipe = recipes.find((r) => r.id === Number(id));

  const [recipe, setRecipe] = useState(existingRecipe || {
    title: "",
    ingredients: "",
    instructions: "",
    image: ""
  });

  useEffect(() => {
    if (!existingRecipe) {
      navigate("/"); // Redirect if recipe not found
    }
  }, [existingRecipe, navigate]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editRecipe(recipe);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={recipe.title} onChange={handleChange} required />
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
        <input type="text" name="image" value={recipe.image} onChange={handleChange} />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;
