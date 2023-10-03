import { createSelector } from "reselect";

const selectorCategoriesReducer = (state) => state.categories; // from our categories reducer.
// the above selector is the one which runs, the 2 below are memoised.
export const selectorCategories = createSelector(
  [selectorCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);
// the above is memonized

export const selectorCategoriesMap = createSelector(
  [selectorCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
// Data transformation

export const selectorCategoriesIsLoading = createSelector(
  [selectorCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
