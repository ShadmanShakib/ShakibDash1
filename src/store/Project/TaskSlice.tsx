import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
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
    addTask: (state, action: PayloadAction<string>) => {
      state.push({ id: uuid(), body: action.payload, completed: false });
    },
    taskCompleted: (state, action: PayloadAction<string>) => {
      const selected = state.find((task) => task.id === action.payload);
      if (selected) selected.completed = true;
    },
  },
});

export const { addTask, taskCompleted } = slice.actions;
export default slice.reducer;
