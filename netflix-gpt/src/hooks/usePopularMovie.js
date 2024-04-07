import React from "react";
import { tmdbOptions } from "./../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./../utils/movieSlice";

const usePopularMoviesData = () => {
  const dispatch = useDispatch();
  const MoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      tmdbOptions
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    MoviesList();
  }, []);
};

export default usePopularMoviesData;
