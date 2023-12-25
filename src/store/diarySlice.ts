import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

export interface DiaryState {
  latitude?: number;
  longitude?: number;
  isClickPos?: boolean;
  isSubmitPos?: boolean;
  address?: string;
}

export const initialState = {
  latitude: 37.5759,
  longitude: 126.9768,
  isClickPos: false,
  isSubmitPos: false,
  address: "",
} as DiaryState;

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    createDiary: (state, action: PayloadAction<DiaryState>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.isClickPos = action.payload.isClickPos;
      state.isSubmitPos = action.payload.isSubmitPos;
      state.address = action.payload.address;
    },
  },
});

export const { createDiary } = diarySlice.actions;

export const diary = (state: RootState) => state.diary;

export default diarySlice.reducer;
