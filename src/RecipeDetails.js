import "./App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "./getdata";

const RecipeDetails = () => {
  const { recipetitle } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipe(recipetitle);
        setRecipe(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, [recipetitle]);

  const imagePaths = recipe.imagepath || [];

  const carouselItems = imagePaths.map((imagePath, index) => (
    <div className="images">
      <div
        key={index}
        className={`carousel-item ${index === 0 ? "active" : ""}`}
      >
        <img
          src={`https://cookbook-app-mvc-backend.onrender.com/images/${imagePath}`}
          className="d-block w-100 carousel-image-container"
          alt={recipe.title}
        />
      </div>
    </div>
  ));

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col">
          <p>{recipe.information}</p>
          <hr />
        </div>
      </div>
      <h5>{recipe.title}</h5>
      <div className="row justify-content-center" id="image-container">
        <div className="col-12 text-center">
          {imagePaths.length > 1 && (
            <div className="row mt-2">
              <div
                id="recipeAlbum"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <p>{recipe.categories}</p>

                <div className="carousel-indicators">
                  {imagePaths.map((imagePath, index) => (
                    <button
                      type="button"
                      key={index}
                      data-bs-target="#recipeAlbum"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : ""}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">{carouselItems}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 my-4">
          <h3>Ingredients</h3>
          <hr />
          <table className="table table-sm table-hover">
            <tbody>
              <span>{recipe.ingredients}</span>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6 my-4">
          <h3>Instructions</h3>
          <hr />
          {recipe.instructions}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
