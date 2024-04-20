import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = import.meta.env.VITE_SEARCH_QUERY_API;

export const SearchApi = createApi({
  reducerPath: "SearchApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getSearchRestaurant: builder.query({
      query: ({ latitude, longitude, query }) => {
        return `?lat=${latitude}&lng=${longitude}&str=${query}`;
      },
    }),
  }),
});

export const { useGetSearchRestaurantQuery } = SearchApi;
