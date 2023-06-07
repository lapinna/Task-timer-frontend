import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
  },
});

export const { getTasks, addTask } = taskSlice.actions;
export const getAllTasks = (state) => state.tasks.tasks;
export default taskSlice.reducer;
