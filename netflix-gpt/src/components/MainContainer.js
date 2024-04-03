import React from "react";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
  if (!movies) return null;

  const mainVideo = movies[0];
  console.log(mainVideo);

  return (
    <div className="relative">
      <VideoContainer id={mainVideo?.id} />
      <VideoTitle name={mainVideo?.original_title} desc={mainVideo?.overview} />
    </div>
  );
};

export default MainContainer;
