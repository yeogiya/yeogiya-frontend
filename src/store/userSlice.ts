import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  nickname: string;
  id: string;
  email: string;
  profileImg: string;
}

export const initialUserState = {
  nickname: "",
  id: "",
  email: "",
  profileImg: "",
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    createUser: (state, action: PayloadAction<UserState>) => {
      state.nickname = action.payload.nickname;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.profileImg = action.payload.profileImg;
    },
  },
});

export const { createUser } = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
