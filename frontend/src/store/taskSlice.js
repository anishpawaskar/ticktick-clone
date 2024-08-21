import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    isControlPanelVisible: true,
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
  },
});

export const { toggleControlPanel, closeControlPanel } = taskSlice.actions;
export const selectTask = (state) => state.task;

export default taskSlice.reducer;
