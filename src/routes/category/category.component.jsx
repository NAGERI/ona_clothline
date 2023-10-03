import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectorCategoriesMap,
  selectorCategoriesIsLoading,
} from "../../store/categories/category.selector";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext); // the objects are from firestore
  const categoriesMap = useSelector(selectorCategoriesMap);
  const isLoading = useSelector(selectorCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {/**
       * Safe guard async code for it to render even before fetching items are present.
       */}
      <CategoryTitle> {category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
