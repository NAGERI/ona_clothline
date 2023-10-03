import { useSelector } from "react-redux";
import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
  selectorCategoriesIsLoading,
  selectorCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectorCategoriesMap);
  const isLoading = useSelector(selectorCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
