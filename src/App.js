import { useEffect, useState } from "react";
//import useConteful from "./recipe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import RecipeDetail from "./RecipeDetail";
import FullCard from "./FullCard";
import Home from "./Home";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { getData } from "./getdata";

const App = () => {
  const [intialRecipe, setInitialRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  //const { getRecipe } = useConteful();

  useEffect(() => {
    getData().then((response) => setInitialRecipe(response.data));
  }, []);
  console.log(intialRecipe);

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
                path="RecipeDetail"
                element={
                  <RecipeDetail
                    setInitialRecipe={setInitialRecipe}
                    intialRecipe={intialRecipe}
                    search={search}
                    setSearch={setSearch}
                    filterData={filterData}
                    setFilterData={setFilterData}
                  />
                }
              >
                {" "}
              </Route>

              <Route
                path="/recipecard/:recipetitle"
                element={<FullCard intialRecipe={intialRecipe} />}
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
