import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  Data: null,
  error: "",
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const res = await axios.get(SWIGGY_API);
  return res?.json();
});

const DataSlice = createSlice({
  name: "SwiggyData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.Data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.Data = null;
      state.error = action.error.message;
    });
  },
});

export default DataSlice.reducer;
