import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import Navbar from "./components/Navbar";
import { RecipeProvider } from "./context/RecipeContext";
import EditRecipe from "./pages/EditRecipe";


function App() {
  return (
    <RecipeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />}/>

        </Routes>
      </Router>
    </RecipeProvider>
  );
}

export default App;
