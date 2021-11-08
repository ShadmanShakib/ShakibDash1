import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface ExchangeRate {
  rate: string;
  timestamp: string;
}

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<ExchangeRate[], string>({
      query: () => "ExchangeRate",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = postApi;
