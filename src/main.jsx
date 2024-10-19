import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import JavaScript from './que file/JavaScript';
import TypeScript from './que file/TypeScript';
import React from './que file/React';
import Next from './que file/Next';
import Node from './que file/Node';
import Express from './que file/Express';
import MongoDB from './que file/MongoDB';
import Mongoose from './que file/Mongoose';
import Redux from './que file/Redux';
import PostGreSql from './que file/PostGreSql';
import AWS from './que file/AWS';
import Docker from './que file/Docker';
import GraphQL from './que file/GraphQL';
import Explore from './home file/Explore';


import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Update from './crud file/Update';
import Read from './crud file/Read';


// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/explore",
        element:  <Explore></Explore> ,
      },
      {
        path: "/javascript",
        element:  <JavaScript></JavaScript>  ,
      },
      {
        path: "/typescript",
        element:   <TypeScript></TypeScript>  ,
      },
      {
        path: "/react",
        element:  <React></React>  ,
      },
      {
        path: "/next",
        element:  <Next></Next> ,
      },
      {
        path: "/node",
        element:  <Node></Node> ,
      },
      {
        path: "/express",
        element:   <Express></Express>  ,
      },
      {
        path: "/mongodb",
        element:  <MongoDB></MongoDB> ,
      },
      {
        path: "/mongoose",
        element:  <Mongoose></Mongoose> ,
      },
      {
        path: "/redux",
        element:  <Redux></Redux> ,
      },
      {
        path: "/postgres",
        element: <PostGreSql></PostGreSql> ,
      },
      {
        path: "/aws",
        element:   <AWS></AWS>  ,
      },
      {
        path: "/docker",
        element:  <Docker></Docker> ,
      },
      {
        path: "/graphql",
        element: <GraphQL></GraphQL> ,
      },
      {
        path: "/update",
        element:  <Update></Update> ,
      },
      {
        path: "/read",
        element: <Read></Read> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
   
  </StrictMode>,
)
