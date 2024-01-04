import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

interface PlaceState {
  placeName: string;
  placeId: string;
  keyword: string;
  yeogiyaRating: number;
  googleImage?: string;
}

export const initialState = {
  placeName: "",
  placeId: "",
  keyword: "",
  yeogiyaRating: 0,
  googleImage: "",
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
      state.googleImage = action.payload.googleImage;
    },
  },
});

export const { createPlace } = placeSlice.actions;

export const place = (state: RootState) => state.place;

export default placeSlice.reducer;
