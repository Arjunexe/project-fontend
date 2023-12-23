import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Signup from '../../pages/signup/signup'
import Login from '../../pages/login/login'
import Home from '../../pages/home/home'


const Router = createBrowserRouter([
   {
    path: "/signup",
    element: <Signup />
   },
   {
    path: "/",
    element: <Login />
   },
   {
    path: "/home",
    element: <Home/>
   }
])

export default Router;