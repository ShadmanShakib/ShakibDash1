import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { markets, markets_charts } from "./types";

// Define a service using a base URL and expected endpoints
export const CoingeckoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  endpoints: (builder) => ({
    getMarket: builder.query<markets[], string>({
      query: () =>
        `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`,
    }),
    getMarketChart: builder.query<markets_charts, string>({
      query: (time) =>
        `/coins/bitcoin/market_chart?vs_currency=usd&days=${time}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMarketQuery, useGetMarketChartQuery } = CoingeckoApi;
