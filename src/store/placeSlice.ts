import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

interface PlaceState {
  placeName: string;
  placeId: string;
  keyword: string;
  yeogiyaRating: number;
}

export const initialState = {
  placeName: "",
  placeId: "",
  keyword: "",
  yeogiyaRating: 0,
} as PlaceState;

export const placeSlice = createSlice({
  name: "place",
  initialState: initialState,
  reducers: {
    createPlace: (state, action: PayloadAction<PlaceState>) => {
      state.placeName = action.payload.placeId;
      state.placeId = action.payload.placeId;
      state.keyword = action.payload.keyword;
      state.yeogiyaRating = action.payload.yeogiyaRating;
    },
  },
});

export const { createPlace } = placeSlice.actions;

export const place = (state: RootState) => state.place;

export default placeSlice.reducer;
