import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    activeModal: "",
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
  },
});

export const { toggleModal, closeModal } = modalSlice.actions;
export const selectActiveModal = (state) => state.modal;

export default modalSlice.reducer;
