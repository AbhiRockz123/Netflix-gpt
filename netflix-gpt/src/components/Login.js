// Import necessary dependencies
import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "./../utils/ValidateData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./../utils/firebase";
import { useDispatch } from "react-redux";
import { AddUser } from "./../utils/UserSlice";
import { redirect, useNavigate } from "react-router-dom";

// Define the Login component
const Login = () => {
  // State variables for managing sign in/up and error message
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to toggle between sign in and sign up
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setisSignIn(!isSignIn);
  };

  // References for email and password input fields
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Function to handle sign in/up button click
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    let dataValidate;

    if (!isSignIn) {
      // Validate input data for sign-up
      dataValidate = checkValidData(
        email?.current?.value,
        password?.current?.value,
        name?.current?.value,
        isSignIn
      );

      // If data is valid, proceed with sign-up
      if (!dataValidate && !isSignIn) {
        const auth = getAuth();
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;

            // Update user profile with username
            updateProfile(user, {
              displayName: name?.current?.value,
              photoURL:
                "https://play-lh.googleusercontent.com/ZvMvaLTdYMrD6U1B3wPKL6siMYG8nSTEnzhLiMsH7QHwQXs3ZzSZuYh3_PTxoU5nKqU",
            })
              .then(() => {
                // Username updated successfully

                //Update our Redux Store once the user Signups or Logins
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  AddUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                //redirect("/browse");
                navigate("/browse");
              })
              .catch((error) => {
                // Error updating username
                console.error("Error updating username:", error.message);
              });
          })
          .catch((error) => {
            // Error occurred during sign-up
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Sign-up error:", errorMessage);
            seterrorMessage(errorMessage);
          });
      }
    } else {
      // Validate input data for sign-in
      dataValidate = checkValidData(
        email?.current?.value,
        password?.current?.value,
        name?.current?.value,
        isSignIn
      );

      // If data is valid, proceed with sign-in
      if (!dataValidate) {
        const auth = getAuth();
        signInWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              AddUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          })
          .catch((error) => {
            // Error occurred during sign-in
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Sign-in error:", errorMessage);
            seterrorMessage(errorMessage);
          });
      }
    }

    // If data is not valid, set error message
    if (dataValidate) {
      seterrorMessage(dataValidate);
    } else {
      // Clear error message if data is valid
      seterrorMessage(null);
    }
  };

  // Return the JSX for the Login component
  return (
    <div>
      <Header />
      <div className=" text-white h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background-logo"
            className=" object-cover blur-[2px]"
          />
        </div>
        <div className="relative bg-black mx-auto p-4 flex flex-col text-center w-80 rounded-lg bg-opacity-70">
          <form className="m-4 p-2">
            <h2 className="m-2 p-2 text-2xl font-bold">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <input
                ref={name}
                className="w-full mx-auto m-4 p-2 bg-gray-700 rounded-sm"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="w-full mx-auto m-4 p-2 bg-gray-700 rounded-sm"
              type="text"
              placeholder="Mobile or Email Address"
            />
            <input
              ref={password}
              className="w-full mx-auto m-4 p-2 bg-gray-700 rounded-sm"
              type="password" // Change input type to password for password field
              placeholder="Password"
            />
            {/* Display error message if present */}
            <p className="text-red-800  m-2 p-2">{errorMessage}</p>
            <button
              onClick={(e) => handleButtonClick(e)}
              className="p-2  rounded-md bg-red-700 w-full mx-auto"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            onClick={(e) => handleClick(e)}
            className="my-6 p-2 cursor-pointer"
          >
            {isSignIn ? "Not a Member?Sign Up" : "Already a Member ? Login in "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
