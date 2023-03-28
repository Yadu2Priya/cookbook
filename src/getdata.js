import axios from "axios";

const URL = "http://localhost:8000/recipes";

export const getData = async () => {
  const data = await axios.get(URL);

  console.log(data);
  return data;
};
