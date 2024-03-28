import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import locationReducer from "./LocationSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    location: locationReducer,
  },
});

export default appStore;
