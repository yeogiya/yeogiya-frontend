import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "./diarySlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
