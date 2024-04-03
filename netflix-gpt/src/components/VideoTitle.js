import React from "react";

const VideoTitle = ({ name, desc }) => {
  return (
    <div className="absolute pt-[20%] pl-[2%] w-screen aspect-video  bg-gradient-to-r from-black">
      <h2 className="m-2 p-2 font-bold text-5xl w-1/2 text-slate-300">{name}</h2>
      <p className="w-1/4 m-2 p-2 text-slate-300">{desc}</p>
      <div className="">
        <button className="bg-white  m-2 px-10 py-2 rounded-lg  font-bold text-md  hover:bg-opacity-50">
         ▶ Play
        </button>
        <button className="bg-slate-600 opacity-65 m-2 px-10 py-2 rounded-lg text-white font-bold text-md">
          ⓘ Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
