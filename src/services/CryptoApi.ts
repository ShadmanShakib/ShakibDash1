import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface ExchangeRate {
  rate: string;
  timestamp: string;
}

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query({
      query: (currency) =>
        `currencies/ticker?key=${process.env.REACT_APP_API_KEY}&ids=BTC&interval=1d`,
    }),
    getExRate: builder.query<ExchangeRate[], string>({
      query: (currency) =>
        `exchange-rates/history?key=${process.env.REACT_APP_API_KEY}&currency=${currency}&start=2021-10-30T00%3A00%3A00Z&end=2021-11-6T00%3A00%3A00Z`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExRateQuery, useGetCurrenciesQuery } = cryptoApi;
