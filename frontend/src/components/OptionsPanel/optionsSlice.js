import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_TODO_LIST, FEATURES_OPTIONS } from "./optionsPanel.constant";

const optionsSlice = createSlice({
  name: "options",
  initialState: {
    features: FEATURES_OPTIONS,
    todos: DEFAULT_TODO_LIST,
  },
  reducers: {
    hanldeOptionsSelection: (
      state,
      { payload: { currentOptionPanel, option } }
    ) => {
      if (currentOptionPanel === 0) {
        state.features = state.features.map((feature) =>
          feature.id === option.id
            ? { ...feature, isSelected: !option.isSelected }
            : feature
        );
      } else {
        state.todos = state.todos.map((todo) =>
          todo.id === option.id
            ? { ...todo, isSelected: !option.isSelected }
            : todo
        );
      }
    },
  },
});

export const selectOptions = (state) => state.options;
export const { hanldeOptionsSelection } = optionsSlice.actions;
export default optionsSlice.reducer;
