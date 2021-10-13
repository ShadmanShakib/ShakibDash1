import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface ISidebarState {
  expanded: boolean;
  isFavorite: boolean;
  isSearches: boolean;
}

const initialState: ISidebarState = {
  expanded: true,
  isFavorite: false,
  isSearches: false,
};

const slice = createSlice({
  name: "Sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.expanded = !state.expanded;
    },
    toggleFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    },
    toggleSearches: (state) => {
      state.isSearches = !state.isSearches;
    },
  },
});

export const { toggleSidebar, toggleFavorite, toggleSearches } = slice.actions;
export const selectSidebar = (state: RootState) => state.Sidebar;
export default slice.reducer;
