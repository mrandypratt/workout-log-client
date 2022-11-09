import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/App.css"
import { Home } from "./views/Home"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
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
