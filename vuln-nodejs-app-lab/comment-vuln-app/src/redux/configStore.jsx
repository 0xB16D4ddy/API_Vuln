import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducer/commentReducer";

export const store = configureStore({
  reducer: {
    commentReducer,
  },
});
