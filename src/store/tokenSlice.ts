import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

export interface TokenState {
  accessToken: string;
}

export const initialState = {
  accessToken: "",
} as TokenState;

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    createToken: (state, action: PayloadAction<TokenState>) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { createToken } = tokenSlice.actions;

export const token = (state: RootState) => state.token;

export default tokenSlice.reducer;
