import { Link } from "react-router-dom"
import { APDevLogo } from '../assets/APDevLogo';
import React, { useState, useEffect } from 'react';
import resume from "../assets/AndyPrattResume.pdf";

const DesktopNavbar = (): JSX.Element => {
  return (
    <div className="desktop-nav">
      <Link to="/">
        <APDevLogo/>
      </Link>
      <div className="desktop-nav-button-container">
        <Link to="/portfolio">
          <div className="desktop-nav-button">
              PORTFOLIO
          </div>
        </Link>

        <a href={resume} target="_blank" rel="noreferrer noopener">
          <div className="desktop-nav-button">
            RESUME
          </div>
        </a>

        <Link to="/about">
          <div className="desktop-nav-button">
            ABOUT ME
          </div>
        </Link>
      </div>
    </div>
  )
}

const MobileNavbar = (): JSX.Element => {
  return (
    <div className="mobile-navbar">
      Mobile Navbar
    </div>
  )
}

export const Navbar = (): JSX.Element => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div >
      {matches && (<DesktopNavbar/>)}
      {!matches && (<MobileNavbar/>)}
    </div>
  );
}
