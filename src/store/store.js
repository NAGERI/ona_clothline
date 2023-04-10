import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// import { configureStore } from "reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middlware = [logger];
const composeEnhacers = compose(applyMiddleware(...middlware));
export const store = createStore(rootReducer, undefined, composeEnhacers);
