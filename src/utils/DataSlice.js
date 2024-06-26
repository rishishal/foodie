import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BannerData: null,
  restaurants: null,
  highRatedRestaurants: null,
  pureVegRestaurants: null,
  fastDeliveryRestaurants: null,
  city: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.BannerData = action.payload;
    },
    setAllRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    addHighRatedItems: (state, action) => {
      state.highRatedRestaurants = action.payload;
    },
    addPureVegRestaurants: (state, action) => {
      state.pureVegRestaurants = action.payload;
    },
    addFastDeliveryRestaurants: (state, action) => {
      state.fastDeliveryRestaurants = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {
  setBannerData,
  setCity,
  setAllRestaurants,
  addHighRatedItems,
  addPureVegRestaurants,
  addFastDeliveryRestaurants,
} = dataSlice.actions;

export default dataSlice.reducer;
