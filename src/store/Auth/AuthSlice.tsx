import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  authenticated: boolean;
}
const initialState: IAuth = {
  authenticated: false,
};
const AuthReducer = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
  },
});

export const { setAuthenticated } = AuthReducer.actions;
export default AuthReducer.reducer;
