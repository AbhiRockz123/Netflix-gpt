import React from 'react';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import GptSearch from './GptSearch';


const Body = () => {

    const AppRouter= createBrowserRouter([
        {
            path: '/',
            element:<Login/>
        },
        {
            path: '/browse',
            element:<Browse/>
        },
    ])
  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body;