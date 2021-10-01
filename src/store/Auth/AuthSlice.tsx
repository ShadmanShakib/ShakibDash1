import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAuth {
  authenticated: boolean;
}
const initialState: IAuth = {
  authenticated: false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
  },
});

export const { setAuthenticated } = slice.actions;
export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export default slice.reducer;
