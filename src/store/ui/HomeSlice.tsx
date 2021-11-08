import { createSlice } from "@reduxjs/toolkit";

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
    tabDue: (state) => {
      state.tabmenu = "due";
    },
    tabCompleted: (state) => {
      state.tabmenu = "completed";
    },
  },
});

export const { tabUpcoming, tabDue, tabCompleted } = slice.actions;

export default slice.reducer;
