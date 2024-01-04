import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "./diarySlice";
import placeReducer from "./placeSlice";

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
    place: placeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
