//import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeDetail = ({
  intialRecipe,
  search,
  setSearch,
  filterData,
  setFilterData,
}) => {
  const submitSearch = (value) => {
    setSearch(value);
    console.log(search);
    const data = intialRecipe.filter((e) =>
      e.recipetitle.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(data);
    console.log("data", data);
  };
  return (
    <>
      <div id="form">
        <form onSubmit={(e) => submitSearch(e)}>
          <input
            type="text"
            value={search}
            onChange={(e) => submitSearch(e.target.value)}
          />
        </form>
      </div>

      {search.length
        ? filterData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item?.featuredimg})` }}
            >
              <h1 className="title">{item?.recipetitle}</h1>
              <p className="title">
                CookTime: {item?.recipecookingtime} minutes
              </p>
              <Link to={`/recipecard/${item?.recipetitle}`}>Recipe Detail</Link>
            </div>
          ))
        : intialRecipe.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item?.featuredimg})` }}
            >
              <h1 className="title">{item?.recipetitle}</h1>
              <p className="title">
                CookTime: {item?.recipecookingtime} minutes
              </p>
              <Link
                to={`/recipecard/${item?.recipetitle}`}
                style={{ color: "blue" }}
              >
                Recipe Detail
              </Link>
            </div>
          ))}
    </>
  );
};

export default RecipeDetail;
