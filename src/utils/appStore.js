import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import locationReducer from "./LocationSlice";
import { swiggyApi } from "./apiSlice";
import { menuApi } from "./menuApi";
import { SearchApi } from "./SearchApi";
import dataReducer from "./DataSlice";
import searchSlice from "./searchSlice";
import SearchResReducer from "../utils/searchResSlice";

const appStore = configureStore({
  reducer: {
    [swiggyApi.reducerPath]: swiggyApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [SearchApi.reducerPath]: SearchApi.reducer,
    cart: cartReducer,
    location: locationReducer,
    data: dataReducer,
    search: searchSlice,
    searchRes: SearchResReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      swiggyApi.middleware,
      menuApi.middleware,
      SearchApi.middleware
    ),
});

export default appStore;
