import React from 'react'
import Login from '../Component/Login';
import Brows from '../Component/Brows';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/brows",
      element:<Brows/>
    },
  ]);

  return (
    <div>
     
      <RouterProvider router={ appRouter} />
    </div>

   
  );
};


export default Body;