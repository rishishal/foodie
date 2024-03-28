import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    latitude: 28.7041,
    longitude: 77.1025,
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
