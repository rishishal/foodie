import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MENU_API,
  }),
  endpoints: (builder) => ({
    fetchMenu: builder.query({
      query: ({ location, id }) => ({
        url: `menu?lat=${location.latitude}&lng=${location.longitude}&restaurantId=${id}`,
      }),
    }),
  }),
});

export const { useFetchMenuQuery } = menuApi;
