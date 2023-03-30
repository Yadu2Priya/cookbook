import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import RecipesIndex from "./RecipesIndex";
import RecipeDetails from "./RecipeDetails";
import Home from "./Home";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { getRecipes } from "./getdata";

const App = () => {
  const [intialRecipes, setInitialRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => setInitialRecipes(response.data));
  }, []);
  console.log(intialRecipes);

  return (
    <>
      <div className="App">
        <main className="container p-4">
          <Router>
            <NavBar setSearch={setSearch} />
            <Routes>
              <Route path="/" element={<Home />}>
                {" "}
              </Route>
              <Route
                path="RecipesIndex"
                element={
                  <RecipesIndex
                    setInitialRecipes={setInitialRecipes}
                    intialRecipes={intialRecipes}
                    search={search}
                    setSearch={setSearch}
                    filterData={filterData}
                    setFilterData={setFilterData}
                  />
                }
              ></Route>
              <Route
                path="/recipedetails/:recipetitle"
                element={<RecipeDetails />}
              ></Route>
            </Routes>
          </Router>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
