import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../services/PostApi";
import authReducer from "./Auth/AuthSlice";
import { Sidebar } from "./ui";
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    auth: authReducer,
    Sidebar,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
