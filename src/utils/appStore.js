import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import locationReducer from "./LocationSlice";
import dataReducer from "./DataSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    location: locationReducer,
    data: dataReducer,
  },
});

export default appStore;
