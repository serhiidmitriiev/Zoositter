import { configureStore } from "@reduxjs/toolkit";
import reducer from "./sitters/reducer";

const store = configureStore({
  reducer,
});

export default store;
