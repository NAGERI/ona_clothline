import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlwares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
// const composeEnhacer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
// const composeEnhacers = composeEnhacer(applyMiddleware(...middlware));
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlwares),
});
