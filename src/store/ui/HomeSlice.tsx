import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IHomeSlice {
  tabmenu: "upcoming" | "due" | "completed";
}
const initialState: IHomeSlice = {
  tabmenu: "upcoming",
};
const slice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    tabUpcoming: (state) => {
      state.tabmenu = "upcoming";
    },
  },
});

export const { tabUpcoming } = slice.actions;
