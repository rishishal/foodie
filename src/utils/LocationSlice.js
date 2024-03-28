import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    latitude: 28.7041,
    longitude: 77.1025,
  },
  city: "Select Location",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setLocation, setCity } = locationSlice.actions;

export default locationSlice.reducer;
