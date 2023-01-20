import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";
export const ProductsContext = createContext({
  product: [], // this to store our products
  setProduct: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value_res = { products, setProducts }; // tjhos
  return (
    <ProductsContext.Provider value={value_res}>
      {children}
    </ProductsContext.Provider>
  );
};
