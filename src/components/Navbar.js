import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/add-recipe" style={styles.link}>Add Recipe</Link>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
