import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SearchApi = createApi({
  reducerPath: "SearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getSearchRestaurant: builder.query({
      query: ({ latitude, longitude, query }) => ({
        url: `search?lat=${latitude}&lng=${longitude}&query=${query}`,
      }),
    }),
  }),
});

export const { useGetSearchRestaurantQuery } = SearchApi;
