import { configureStore } from "@reduxjs/toolkit";

import friendSlice from "./friendSlice";

export const store = configureStore({
  reducer: {
    friends: friendSlice.reducer,
  },
});
