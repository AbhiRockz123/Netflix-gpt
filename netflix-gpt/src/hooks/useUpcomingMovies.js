import { tmdbOptions } from "./../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "./../utils/movieSlice";

const UseUpcomingMovies = () => {
  const dispatch = useDispatch();
  const MoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      tmdbOptions
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    MoviesList();
  }, []);
};
export default UseUpcomingMovies;
