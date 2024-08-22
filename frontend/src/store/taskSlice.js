import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    isControlPanelVisible: true,
    selectedTask: "",
  },
  reducers: {
    toggleControlPanel: (state, { payload }) => {
      if (payload) {
        state.isControlPanelVisible = true;
      } else {
        state.isControlPanelVisible = false;
      }
    },
    closeControlPanel: (state) => {
      state.isControlPanelVisible = false;
    },
    getSelectedTask: (state, { payload }) => {
      state.selectedTask = payload;
    },
  },
});

export const { toggleControlPanel, closeControlPanel, getSelectedTask } =
  taskSlice.actions;
export const selectTask = (state) => state.task;

export default taskSlice.reducer;
