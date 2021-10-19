import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../services/PostApi";
import authReducer from "./Auth/AuthSlice";
import { Sidebar } from "./ui";
import { Tasks } from "./Project";
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    auth: authReducer,
    Sidebar,
    Tasks,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
