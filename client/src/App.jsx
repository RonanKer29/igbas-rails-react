import { useState } from "react";
import "./App.css";
import RecipesList from "./components/recipes/RecipesList";

function App() {
  return (
    <>
      <div className="app">
        <h1>React on rails IGBas book</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <RecipesList />
      </div>
    </>
  );
}

export default App;
