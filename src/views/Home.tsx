import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../styles/Home.css"

export const Home = () => {
  
  return (
    <div className="page-container">
      <Navbar/>

      <div className="page-content-container">
        <div className="home-button-container">
          <Link to="/portfolio">
            <button className="home-button">
              Portfolio
            </button>
          </Link>

          <Link to="/about">
            <button className="register">
              Register
            </button>
          </Link>

        </div>

      </div>


    </div>
  );
}