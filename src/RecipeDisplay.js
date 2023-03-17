import React from "react";

import RecipeDetail from "./RecipeDetail";

const RecipeDisplay = ({ intialRecipe }) => {
  return (
    <div>
      <RecipeDetail intialRecipe={intialRecipe} />
    </div>
  );
};

export default RecipeDisplay;
