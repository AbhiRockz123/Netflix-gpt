import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerData: null,
    popularMovies: null,
    topRatedMovies: null,
    UpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerData: (state, action) => {
      state.trailerData = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies= action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies= action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerData ,addPopularMovies,addtopRatedMovies,addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
