import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCity } from "./LocationSlice";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (location, { dispatch }) => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}`
      );
      const response = await res.json();
      dispatch(setData(response?.data));
      dispatch(setFilteredData(response?.data));
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
