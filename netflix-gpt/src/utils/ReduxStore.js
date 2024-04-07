import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./movieSlice"; // Import the exported reducer
import Gptreducer from "./GptSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer, // Use movieReducer
    Gpt: Gptreducer,
  },
});

export default AppStore;
