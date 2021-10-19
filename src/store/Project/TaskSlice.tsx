import { createSlice } from "@reduxjs/toolkit";

interface ITask {
  id: string;
  body: string;
  completed: boolean;
}
const initialState: ITask[] = [
  {
    id: "hfhfg",
    body: "Task 1",
    completed: false,
  },
];

const slice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask: (state) => {
      state.push({ id: "hhfh", body: "Task 2", completed: false });
    },
  },
});

export const { addTask } = slice.actions;
export default slice.reducer;
