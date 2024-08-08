import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const store = createStore(persistedReducer, applyMiddleware());
const persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });
export { persistor };
export default store;
