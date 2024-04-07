import React from "react";
import CardContainer from "./CardContainer";


const MovieList = ({ title, movies }) => {
  return (
    <div className="my-10">
      <h1 className="text-lg md:text-3xl py-4 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <CardContainer key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
