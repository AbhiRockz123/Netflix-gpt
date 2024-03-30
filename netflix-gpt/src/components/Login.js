import React, { useState } from "react";
import Header from "./Header";
  
const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="relative text-white h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background-logo"
            className=" object-cover"
          />
        </div>
        <div className="relative bg-black mx-auto p-4 flex flex-col text-center w-80 rounded-lg bg-opacity-70">
          <form>
            <h2 className="m-2 p-2 text-2xl font-bold">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <input
                className="w-full mx-auto m-4 p-2 bg-gray-700 rounded-sm"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              className="w-full mx-auto m-4 p-2 bg-gray-700 rounded-sm"
              type="text"
              placeholder="Mobile or Email Address"
            />
            <input
              className="w-full mx-auto m-4 p-2 bg-gray-700 rounded-sm"
              type="text"
              placeholder="Password"
            />
            <button className="p-2 m-4 rounded-md bg-red-700 w-full mx-auto">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p onClick={(e) => handleClick(e)} className="my-6 p-2">
            {isSignIn ? "Already a Member ? Login in " : "Not a Member?Sign Up"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
