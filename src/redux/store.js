import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/taskSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
