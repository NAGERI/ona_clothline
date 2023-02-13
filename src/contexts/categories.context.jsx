import { createContext, useState, useEffect } from "react";

// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
  categoriesMap: {}, // this to store our Categories
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    // addCollectionsAndDocuments("categories", SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    try {
      getCategoriesMap();
    } catch (error) {
      console.log("Error");
    }
  }, []);
  const value_res = { categoriesMap, setCategoriesMap }; // tjhos
  return (
    <CategoriesContext.Provider value={value_res}>
      {children}
    </CategoriesContext.Provider>
  );
};
