import { Link } from "react-router-dom"
import { APDevLogo } from '../assets/APDevLogo';
import { useState, useEffect } from 'react';
import resume from "../assets/AndyPrattResume.pdf";
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const DesktopNavbar = (): JSX.Element => {
  return (
    <nav className="nav">
      <Link to="/">
        <APDevLogo format="desktop"/>
      </Link>
      <div className="nav-button-container">
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
    </nav>
  )
}

const MobileNavbar = (): JSX.Element => {
  const [ menuDisplay, setMenuDisplay ] = useState(false);

  const toggleMenu = () => {
    setMenuDisplay(!menuDisplay);
  }
  
  return (
    <div className="nav">
      <Link to="/">
        <APDevLogo format="mobile"/>
      </Link>

      <div className="app-bar" onClick={toggleMenu}>
        <MenuIcon fontSize="large"/>
      </div>

      {menuDisplay && 
        <div className="app-bar-menu" onClick={toggleMenu}>

          <div className="app-bar-header">

          </div>

          <CloseRoundedIcon className="close-feedback-icon" fontSize="large"/>
          <Link to="/">
            <div className="app-bar-menu-item">
                HOME
            </div>
          </Link>

          <Link to="/portfolio">
            <div className="app-bar-menu-item">
                PORTFOLIO
            </div>
          </Link>

          <a href={resume} target="_blank" rel="noreferrer noopener">
            <div className="app-bar-menu-item">
              RESUME
            </div>
          </a>

          <Link to="/about">
            <div className="app-bar-menu-item">
              ABOUT ME
            </div>
          </Link>

        </div>
      }

      {menuDisplay && 
        <div className="blur-bg" onClick={toggleMenu}/>
      }
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
