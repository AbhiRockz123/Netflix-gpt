import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { TMDB_api_key } from "./../utils/Constants";
import { useDispatch } from "react-redux";
import { addTrailerData } from "./../utils/movieSlice";
import VideoTitle from "./VideoTitle";

const VideoContainer = ({id}) => {
  const dispatch = useDispatch();
  const trailerVideo=useSelector((store)=>store?.movie?.trailerData) 

;  
  
  const videoList = async () => {
    const data = await fetch(
       `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&&api_key=${TMDB_api_key}`
    );
    const json = await data.json();
    const trailerData = (json?.results).filter(
      (data) => data?.type === "Official Trailer" || data?.type==="Trailer"
    );
    dispatch(addTrailerData(trailerData));
  };

  useEffect(() => {
    videoList();
  }, []);

  if(!trailerVideo) return null;

  

  return <div className="w-screen">
    <iframe  className="w-screen aspect-video " src={"https://www.youtube.com/embed/"+trailerVideo[0]?.key+"?si=lftwCCc3KwTtzazM&autoplay=1&mute=1"} 
    title="YouTube video player" frameBorder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>;
};

export default VideoContainer;
