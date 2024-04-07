import React from 'react'
import Header from './Header';
import {lang} from "./../utils/Constants"
import { useSelector } from 'react-redux';

const GptSearch = () => {
  const language=useSelector(store=>store.Gpt.language);
  console.log(language);
  return (
    <div>
      <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background-logo"
            className="absolute object-cover blur-[2px] -z-10"
          />
        <div className="h-screen flex items-center justify-center ">
          <input className="w-1/4 m-2 p-2 bg-slate-20  border-2 border-black rounded-lg " placeholder={lang[language]?.gptSearchPlaceholder}/>
          <button className="p-2 w-auto bg-slate-200 border-black  border-2 rounded-lg">{lang[language]?.search}</button>
        </div>
    </div>
  )
}

export default GptSearch