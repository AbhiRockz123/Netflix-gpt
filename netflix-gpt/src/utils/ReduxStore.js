import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import movieReducer from './movieSlice'; // Import the exported reducer

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer, // Use movieReducer
  },
});

export default AppStore;