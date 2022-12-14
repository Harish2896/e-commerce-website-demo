//import { addCollectionAndDocument } from "../utils/firebase/firebase.utils.js";
//import SHOP_DATA from "../shop-data.js";
import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoryMap);
    };
    getcategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// eslint-disable-next-line no-lone-blocks
{
  /*useEffect(() => {
  addCollectionAndDocument("categories", SHOP_DATA);
}, []);*/
}
