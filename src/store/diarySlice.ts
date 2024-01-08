import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

export interface DiaryState {
  latitude?: number;
  longitude?: number;
  isClickPos?: boolean;
  isSubmitPos?: boolean;
  address?: string;
  kakaoId?: number;
  name?: string;
}

export const initialDiaryState = {
  latitude: 37.5759,
  longitude: 126.9768,
  isClickPos: false,
  isSubmitPos: false,
  address: "",
  kakaoId: 0,
  name: "",
} as DiaryState;

export const diarySlice = createSlice({
  name: "diary",
  initialState: initialDiaryState,
  reducers: {
    createDiary: (state, action: PayloadAction<DiaryState>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.isClickPos = action.payload.isClickPos;
      state.isSubmitPos = action.payload.isSubmitPos;
      state.address = action.payload.address;
      state.kakaoId = action.payload.kakaoId;
      state.name = action.payload.name;
    },
  },
});

export const { createDiary } = diarySlice.actions;

export const diary = (state: RootState) => state.diary;

export default diarySlice.reducer;
