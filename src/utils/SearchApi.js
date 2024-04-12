import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://www.swiggy.com/dapi/restaurants/search/v3";

export const SearchApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getSearchRestaurant: builder.query({
      query: ({ latitude, longitude, query }) => {
        return `?lat=${latitude}&lng=${longitude}&str=${query}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=bd52aa24-315d-fdcb-661a-6eba3e1ad819&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22dyhqamt6bjfjwm4pkbat%22%2C%22dishFamilyId%22%3A%22846627%22%2C%22dishFamilyIds%22%3A%5B%22846627%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`;
      },
    }),
  }),
});

export const { useGetSearchRestaurantQuery } = SearchApi;
