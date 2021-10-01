import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../services/PostApi";
import authReducer from "./Auth/AuthSlice";
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
