import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import locationReducer from "./LocationSlice";
import { swiggyApi } from "./apiSlice";
import { menuApi } from "./menuApi";
import dataReducer from "./DataSlice";

const appStore = configureStore({
  reducer: {
    [swiggyApi.reducerPath]: swiggyApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    cart: cartReducer,
    location: locationReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swiggyApi.middleware, menuApi.middleware),
});

export default appStore;
