import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
   space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
   accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
   host: "preview.contentful.com"
  });

  const getRecipe = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipe",
      });

      const cleanupdata = entries.items.map((item) => {
        const recipewhole = item.fields;
        const recipecookingtime = item.fields.cookingTIme;
        const recipeingred = item.fields.ingredients;
        const recipemethod = item.fields.method;
        const recipetitle = item.fields.title;
        const featuredimg = item.fields.featureImage.fields.file.url;
        const thumbnail = item.fields.thumbnail.fields.file.url;
        return {
          recipewhole,
          recipecookingtime,
          recipeingred,
          recipetitle,
          featuredimg,
          thumbnail,
          recipemethod,
        };
      });

      return cleanupdata;
    } catch (error) {
      console.log({ error });
    }
  };
  return { getRecipe };
};

export default useContentful;
