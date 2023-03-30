import axios from "axios";

const URL = "https://cookbook-app-mvc-backend.onrender.com/api/v1/recipes/";

export const getRecipes = async () => {
  const data = await axios.get(URL);

  console.log(data);
  return data;
};

export const getRecipe = async (id) => {
  const data = await axios.get(URL + id);

  console.log(data);
  return  data;
};
