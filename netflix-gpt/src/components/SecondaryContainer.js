import React from "react";
import CardContainer from "./CardContainer";
import { useSelector } from "react-redux";
import MoviesList from './MoviesList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black -mt-32">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MoviesList title={"Upcoming Movies"} movies={movies?.UpcomingMovies} />
          
        </div>

      </div>
    )
  );
};
export default SecondaryContainer;
