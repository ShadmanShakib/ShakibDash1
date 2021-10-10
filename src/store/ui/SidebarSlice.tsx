import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ISidebarState {
  expanded: boolean;
  openFavorite: boolean;
}

const initialState: ISidebarState = {
  expanded: true,
  openFavorite: true,
};

const slice = createSlice({
  name: "Sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { toggleSidebar } = slice.actions;
export const selectSidebar = (state: RootState) => state.Sidebar;
export default slice.reducer;