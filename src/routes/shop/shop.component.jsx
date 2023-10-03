import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useCallback(() => {
    dispatch(fetchCategoriesStartAsync);
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
