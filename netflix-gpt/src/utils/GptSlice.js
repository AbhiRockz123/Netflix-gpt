import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "GPT",
  initialState: {
    GptState: false,
    language: "en",
    GptQueryResponseMovies: null,
  },
  reducers: {
    ChangeGptSearch: (state) => {
      state.GptState = !state.GptState;
    },
    ChangeLang: (state, action) => {
      state.language = action.payload;
    },
    addQueriedMovies: (state, action) => {
      state.GptQueryResponseMovies = action.payload;
    },
  },
});

export default GptSlice.reducer;
export const { ChangeGptSearch, ChangeLang, addQueriedMovies } =
  GptSlice.actions;
