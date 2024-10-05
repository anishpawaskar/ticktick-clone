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
    deleteProject: (state, { payload: { projectId } }) => {
      const filterdProjects = state.projects.filter(
        (project) => project.id !== projectId
      );

      state.projects = filterdProjects;
    },
    toggleArchiveProject: (
      state,
      { payload: { projectId, isProjectArchived } }
    ) => {
      const updatedProject = state.projects.map((project) =>
        project.id === projectId
          ? { ...project, isArchive: !isProjectArchived }
          : project
      );

      state.projects = updatedProject;
    },
    togglePinProject: (state, { payload: { projectId, isProjectPinned } }) => {
      const updatedProject = state.projects.map((project) =>
        project.id === projectId
          ? { ...project, isPin: !isProjectPinned }
          : project
      );

      state.projects = updatedProject;
    },
  },
});

export const {
  addNewProject,
  deleteProject,
  toggleArchiveProject,
  togglePinProject,
} = projectSlice.actions;
export const selectProject = (state) => state.project;

export default projectSlice.reducer;
