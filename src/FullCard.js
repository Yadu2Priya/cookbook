import './App.css';


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const FullCard = ({ intialRecipe }) => {
  const { recipetitle } = useParams();
  const [recipe, setRecipe] = useState({});

  console.log(intialRecipe);

  useEffect(() => {
    intialRecipe?.filter((item) => {
      if (item?.recipetitle === recipetitle) {
        setRecipe(item);
      }
    });
  }, [intialRecipe, recipetitle]);

  return (
    <div>
        <h3>{recipe.recipetitle}</h3>
          <img src={recipe.thumbnail} alt={recipe.recipetitle} />
        <p>
          <strong>Ingredients: </strong>
         <span>{recipe.recipeingred}</span>
        </p>
        <br />
        <p>
        <strong>Method: </strong>
          {recipe.recipemethod}
        </p>
      </div>
  );
};
export default FullCard;
