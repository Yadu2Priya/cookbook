import "./App.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FullCard = ({ intialRecipe }) => {
  const { recipetitle } = useParams();
  const [recipe, setRecipe] = useState({});

  console.log(intialRecipe);

  useEffect(() => {
    intialRecipe?.filter((item) => {
      if (item?.title === recipetitle) {
        setRecipe(item);
      }
    });
  }, [intialRecipe, recipetitle]);


  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.url} alt={recipe.title} />
      <p>
        <strong>Ingredients: </strong>
        <span>{recipe.ingredients}</span>
      </p>
      <br />
      <p>
        <strong>Method: </strong>
        {recipe.method}
      </p>
    </div>
  );
};
export default FullCard;