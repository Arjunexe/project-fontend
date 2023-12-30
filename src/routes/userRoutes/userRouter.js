import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Signup from "../../pages/signup/signup";
import Login from "../../pages/login/login";
import Home from "../../pages/home/home";
import App from "../../App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
         path: "login",
         element: <Login />
      },
      {
         path: "signup",
         element: <Signup />
      }
    ],
  },
]);

export default Router;
