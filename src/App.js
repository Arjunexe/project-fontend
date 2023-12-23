import './App.css';
import React from 'react';
import { RouterProvider } from "react-router-dom";
import Router from './routes/userRoutes/userRouter';


function App() {
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
