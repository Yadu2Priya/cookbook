import { Link } from "react-router-dom";
import "./App.css";

import { Col, Row } from "react-bootstrap";

const RecipesIndex = ({
  intialRecipes,
  search,
  setSearch,
  filterData,
  setFilterData,
}) => {
  const submitSearch = (value) => {
    setSearch(value);
    console.log(search);
    const data = intialRecipes.filter((e) =>
      e.title.toLowerCase().includes(value.toLowerCase())
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
      <Row className="row-cols-md-2">
        {search.length
          ? filterData.map((item, index) => (
              <Col key={index} className="mb-4">
                <div
                  className="indeximages"
                  style={{
                    backgroundImage: `url(https://cookbook-app-mvc-backend.onrender.com/images/${item?.imagepath[0]})`,
                  }}
                >
                  <h1 className="title">{item?.title}</h1>
                  <Link to={`/recipedetails/${item?.id}`}>Recipe Detail</Link>
                </div>
              </Col>
            ))
          : intialRecipes.map((item, index) => (
              <Col key={index} className="mb-4">
                <div
                  className="indeximages"
                  style={{
                    backgroundImage: `url(https://cookbook-app-mvc-backend.onrender.com/images/${item?.imagepath[0]})`,
                  }}
                >
                  <h3 className="title">{item?.title}</h3>
                  <Link
                    to={`/recipedetails/${item?.id}`}
                    style={{ color: "blue" }}
                  >
                    Recipe Detail
                  </Link>
                </div>
              </Col>
            ))}
      </Row>
    </>
  );
};

export default RecipesIndex;
