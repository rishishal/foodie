import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define your actions
export const setData = (data) => ({ type: "data/setData", payload: data });
export const setFilteredData = (data) => ({
  type: "data/setFilteredData",
  payload: data,
});
export const setListofRest = (data) => ({
  type: "data/setListofRest",
  payload: data,
});
export const setCity = (city) => ({ type: "data/setCity", payload: city });

// Define your thunk
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (location, { dispatch }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SEVER_API}/api/restaurants?lat=${
          location.latitude
        }&lng=${location.longitude}&page_type=DESKTOP_WEB_LISTING`
      );
      const response = res.data; // Access response data directly from res.data
      dispatch(setData(response?.data));
      dispatch(
        setFilteredData(
          response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        )
      );
      dispatch(
        setCity(
          response?.data?.cards[
            response?.data?.cards.length - 1
          ]?.card?.card?.citySlug?.toUpperCase() || ""
        )
      );
      return response?.data; // Return data to be accessible outside
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
      throw error; // Rethrow error to propagate it to the component
    }
  }
);

// Create slice
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    filteredData: null,
    listOfRest: [],
    city: "Select Location",
    loading: false,
    error: null,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
    setListofRest(state, action) {
      state.listOfRest = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
