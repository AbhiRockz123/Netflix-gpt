import React from "react";

const VideoTitle = ({ name, desc }) => {
  return (
    <div className="w-screen  -mt-32 md:mt-0 aspect-video pt-[20%] px-6 md:px-24 absolute  bg-gradient-to-r from-black ">
      <h2 className="m-0 md:m-2 p-1 md:p-2 font-bold text-2xl md:text-5xl w-1/2 text-slate-300">{name}</h2>
      <p className=" hidden md:inline-block w-1/4 m-2 p-2 text-slate-300">{desc}</p>
      <div className="">
        <button className="bg-white  m-0 md:m-2 px-2 md:px-10 py-1 md:py-2 rounded-lg  font-semibold md:font-bold text-sm md:text-md  hover:bg-opacity-50">
         ▶ Play
        </button>
        <button className=" hidden md:inline-block  bg-slate-600 opacity-65 px-2 md:px-10 py-2 rounded-lg text-white md:font-bold text-md">
          ⓘ Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
