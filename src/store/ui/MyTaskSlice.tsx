import { createSlice } from "@reduxjs/toolkit";

interface IState {
  selectedTaskId: "list" | "board" | "calendar" | "file";
}

const initialState: IState = {
  selectedTaskId: "list",
};
const MyTaskSlice = createSlice({
  name: "myTask",
  initialState,
  reducers: {
    setSelectedTaskId: (state, action) => {
      state.selectedTaskId = action.payload;
    },
  },
});

export const { setSelectedTaskId } = MyTaskSlice.actions;
export default MyTaskSlice.reducer;
