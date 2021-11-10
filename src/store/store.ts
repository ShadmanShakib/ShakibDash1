import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../services/PostApi";
import authReducer from "./Auth/AuthSlice";
import { Sidebar, Home } from "./ui";
import { Tasks } from "./Project";
import { cryptoApi } from "../services";
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    auth: authReducer,
    Sidebar,
    Tasks,
    Home,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, cryptoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
