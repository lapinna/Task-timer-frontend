import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.splice(0, state.length, payload);
    },
  },
});

export const { getTasks, addTask } = taskSlice.actions;
export default taskSlice.reducer;
