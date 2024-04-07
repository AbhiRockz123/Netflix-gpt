import React from "react";
import { tmdbOptions } from "./../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopRatedMovies } from "./../utils/movieSlice";

const UsetopRatedMovies = () => {
  const dispatch = useDispatch();
  const MoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      tmdbOptions
    );
    const json = await data.json();
    dispatch(addtopRatedMovies(json?.results));
  };
  useEffect(() => {
    MoviesList();
  }, []);
};

export default UsetopRatedMovies;