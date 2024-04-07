import React from "react";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
  if (!movies) return null;

  const mainVideo = movies[0];

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle name={mainVideo?.original_title} desc={mainVideo?.overview} />
      <VideoContainer id={mainVideo?.id} />
      
    </div>
  );
};

export default MainContainer;
