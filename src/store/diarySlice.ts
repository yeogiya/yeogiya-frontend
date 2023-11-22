import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

export interface DiaryState {
  latitude: number;
  longitude: number;
}

export const initialState = {
  latitude: 37.5759,
  longitude: 126.9768,
} as DiaryState;

export const dairySlice = createSlice({
  name: "dairy",
  initialState,
  reducers: {
    createDiary: (state, action: PayloadAction<DiaryState>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { createDiary } = dairySlice.actions;

export const diary = (state: RootState) => state.diary;

export default dairySlice.reducer;
