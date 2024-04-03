import React from "react";
import { tmdbOptions } from "./../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addNowPlayingMovies } from "./../utils/movieSlice";

const useReecentMoviesData = () => {
  const dispatch = useDispatch();
  const MoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      tmdbOptions
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    MoviesList();
  }, []);
};

export default useReecentMoviesData;
