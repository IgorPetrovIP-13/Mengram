import { createSlice } from "@reduxjs/toolkit";

interface ModalsState {
  isAddPostOpened: boolean;
}

const initialState: ModalsState = {
  isAddPostOpened: false,
};

const modalsReducer = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleAddPost: (state) => {
      return { ...state,  isAddPostOpened: !state.isAddPostOpened};
    },
  },
});

export const { toggleAddPost } = modalsReducer.actions;

export default modalsReducer.reducer;
