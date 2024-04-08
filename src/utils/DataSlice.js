import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: [],
  list: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFilterData(state, action) {
      state.filterData = action.payload;
    },
    setList(state, action) {
      state.filterData = action.payload;
    },
  },
});

export const { setFilterData, setList } = dataSlice.actions;

export default dataSlice.reducer;
