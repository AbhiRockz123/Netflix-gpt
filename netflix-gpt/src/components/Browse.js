import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useReecentMoviesData from "./../hooks/useReecentMoviesData";
import usePopularMoviesData from "./../hooks/usePopularMovie";
import usetopRatedMovies from "./../hooks/useTopRatedMovies";
import useUpcomingMovies from "./../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const GptToggle = useSelector((store) => store.Gpt?.GptState);
  useReecentMoviesData();
  usePopularMoviesData();
  usetopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />

      {!GptToggle ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <>
          <GptSearch />
        </>
      )}
    </div>
  );
};

export default Browse;
