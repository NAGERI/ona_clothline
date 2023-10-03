import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "../categories/category.types";

export const fetchCategoriesStart = () => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};
export const fetchCategoriesSuccess = (categoriesArray) => {
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};
export const fetchCategoriesFailed = (error) => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

/**
 * Separation of logic, the shop component will fetch, & whether it succeds
 *  or fails, this will handle it.
 * redux - thunk, for all your async behavior.
 * @returns dispatch
 */
export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      console.log(error);
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
