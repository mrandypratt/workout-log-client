import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/App.css"

import { Navbar } from './components/Navbar';
import { Home } from "./views/Home"
import { About } from './views/About';
import Error from "./views/Error"
import { Footer } from './components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <Error/>,
  },
]);

ReactDOM.render(
  <React.StrictMode>

    <div className="default-app-styles">
      <Navbar/>

      <RouterProvider router={router} />

      <Footer/>
    </div>


  </React.StrictMode>,
  document.getElementById('root')
);
