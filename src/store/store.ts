import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/AuthSlice";
import { Sidebar, Home, myTask } from "./ui";
import { Tasks } from "./Project";
import { CoingeckoApi } from "../services/Crypto";
export const store = configureStore({
  reducer: {
    [CoingeckoApi.reducerPath]: CoingeckoApi.reducer,

    auth: authReducer,
    Sidebar,
    Tasks,
    Home,
    myTask,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CoingeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
