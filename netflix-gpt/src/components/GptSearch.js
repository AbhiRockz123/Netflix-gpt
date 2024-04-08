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
      const json = await response.json(); // Await response.json()

      const QueriedMoviesData =
        json?.candidates[0].content.parts[0]?.text.split(",");
      const PromiseArray = QueriedMoviesData.map((movie) => SearchMovie(movie));
      const tmdbList = await Promise.all(PromiseArray);
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
        className="absolute blur-[4px] -z-10  h-screen object-cover  md:h-auto"
      />
      <div className="h-screen flex items-center justify-center  ">
        <div className="flex  flex-col items-center w-full md:w-2/3 justify-center mt-[10%] md:mt-10  ">
          <div className="mb-4 ">
            <input
              ref={inputText}
              className="w-auto m-4 p-2 bg-slate-200  border-2 border-black rounded-lg "
              placeholder={lang[language]?.gptSearchPlaceholder}
            />
            <button
              onClick={() => handleClick()}
              className="p-2 w-auto bg-slate-200 border-black  border-2 rounded-lg hover:scale-110"
            >
              {lang[language]?.search}
            </button>
          </div>

          {QueriedMoviesData && (
            <div className="flex flex-wrap space-x-2 space-y-2 justify-center  ">
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
