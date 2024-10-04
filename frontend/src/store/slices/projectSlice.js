import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      name: "Not Smart",
      isPin: false,
      isArchive: false,
      color: null,
      count: 7,
    },
    {
      id: 2,
      name: "todo",
      isPin: false,
      isArchive: false,
      color: null,
    },
  ],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addNewProject: (state, { payload }) => {
      state.projects.push(payload);
    },
  },
});

export const { addNewProject } = projectSlice.actions;
export const selectProject = (state) => state.project;

export default projectSlice.reducer;
