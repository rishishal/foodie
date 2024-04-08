import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const swiggyApi = createApi({
  reducerPath: "swiggyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SEVER_API,
  }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: (location) => ({
        url: `/api/restaurants`,
        params: {
          lat: location.latitude,
          lng: location.longitude,
          page_type: "DESKTOP_WEB_LISTING",
        },
      }),
    }),
  }),
});

export const { useFetchDataQuery } = swiggyApi;
