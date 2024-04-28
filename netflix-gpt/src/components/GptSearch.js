import React, { useRef, useEffect } from "react";
import Header from "./Header";
import { lang } from "./../utils/Constants";
import { useSelector } from "react-redux";
import { Gemini_API_KEY } from "./../utils/Constants";
import { useDispatch } from "react-redux";
import { addQueriedMovies } from "./../utils/GptSlice";
import CardContainer from "./CardContainer";

const GptSearch = () => {
  const language = useSelector((store) => store.Gpt.language);
  const QueriedMoviesData = useSelector(
    (store) => store?.Gpt?.GptQueryResponseMovies
  );
  const inputText = useRef(null);
  const dispatch = useDispatch();
  const SearchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=33fd98e45ff4faba80ee6bef904ad37e`
    );
    const json = await data.json();
    return json;
  };
  const handleClick = async () => {
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text:
                "Give me list of 10" +
                inputText?.current?.value +
                " which as comma separated such as movie1,movie2....,movie5",
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${Gemini_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      const json = await response.json(); 
      console.log(json);// Await response.json()

      const QueriedMoviesData =
        json?.candidates[0].content.parts[0]?.text.split(",");
      const PromiseArray = QueriedMoviesData.map((movie) => SearchMovie(movie));
      const tmdbList = await Promise.all(PromiseArray);
      console.log(tmdbList);
      dispatch(addQueriedMovies(tmdbList));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background-logo"
        className="absolute bg-repeat-y  blur-[4px] -z-10  h-screen object-cover  md:h-auto"
      />
      <div className="h-screen flex items-center justify-center  ">
        <div className="flex flex-col w-full  justify-center mt-[45%] md:mt-10  ">
          <div className="flex justify-center items-center">
            <input
              ref={inputText}
              className="w-2/6  mr-2 m-2 p-2 text-white font-bold  border-2 border-black rounded-lg bg-slate-500 opacity-60 "
              placeholder={lang?"What would you like to watch today":lang[language]?.gptSearchPlaceholder}
            />
            <button
              onClick={() => handleClick()}
              className="p-2 w-auto  border-black  border-2 rounded-lg bg-red-600 text-white px-10 hover:scale-110"
            >
              {lang?"English":lang[language]?.search}
            </button>
          </div>

          {QueriedMoviesData && (
            <div className="flex flex-wrap space-x-2 space-y-2 justify-center ">
              {QueriedMoviesData.map((data) => (
                <CardContainer
                  key={data?.results[0]?.id}
                  posterPath={data?.results[0]?.poster_path}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
