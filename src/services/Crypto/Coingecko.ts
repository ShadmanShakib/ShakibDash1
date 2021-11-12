import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { markets } from "./types";

// Define a service using a base URL and expected endpoints
export const CoingeckoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  endpoints: (builder) => ({
    getMarket: builder.query<markets[], string>({
      query: () =>
        `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMarketQuery } = CoingeckoApi;
