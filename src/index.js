import React from "react";
import ReactDOM from "react-dom/client";
/* eslint-disable import/no-webpack-loader-syntax */
import "./bootstrap/bootstrap.min.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/userRoutes/userRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);











// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
