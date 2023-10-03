import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// import { configureStore } from "reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlware = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);
const composeEnhacer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhacers = composeEnhacer(applyMiddleware(...middlware));
export const store = createStore(persistedReducer, undefined, composeEnhacers);
export const persistor = persistStore(store);
