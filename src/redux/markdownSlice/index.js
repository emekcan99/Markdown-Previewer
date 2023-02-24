import { createSlice } from "@reduxjs/toolkit";
import { help } from "../../helpText";

export const markdownSlice = createSlice({
  name: "markdownSlice",

  initialState: {
    text: "",
    isHelp: false,
  },
  reducers: {
    setMarkdown: (state, action) => {
      state.text = action.payload;
    },
    setHelp: (state, action) => {
      state.isHelp = action.payload;

      if (state.isHelp) {
        state.text = help;
      }
      else{
        state.text= ""
      }
    },
  },
});

export const { setMarkdown, setHelp } = markdownSlice.actions;

export default markdownSlice.reducer;
