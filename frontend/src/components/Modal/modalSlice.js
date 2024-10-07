import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    activeModal: "",
    isEditModalActive: null,
  },
  reducers: {
    toggleModal: (state, { payload }) => {
      if (payload === state.activeModal) {
        state.activeModal = "";
      } else {
        state.activeModal = payload;
      }
    },
    closeModal: (state) => {
      state.activeModal = "";
    },
    toggleEditModal: (state, { payload }) => {
      if (payload === state.isEditModalActive) {
        state.isEditModalActive = null;
      } else {
        state.isEditModalActive = payload;
      }
    },
    closeEditModal: (state) => {
      state.isEditModalActive = null;
    },
  },
});

export const { toggleModal, closeModal, toggleEditModal, closeEditModal } =
  modalSlice.actions;
export const selectActiveModal = (state) => state.modal;

export default modalSlice.reducer;
