import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/App.css"

import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from './Routes';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
