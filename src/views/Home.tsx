import { Link } from "react-router-dom";
import resume from "../assets/AndyPrattResume.pdf";

export const Home = () => {
  
  return (
    <div className="home-page-container">
      <h1 className="home-greeting">Hello! My name is </h1>
      <h2 className="orange-pop">Andy Pratt.</h2>

      <div className="home-paragraph-container">    
      <p className="home-paragraph">I'm a <b className="blue-pop blue-split-text">Software Engineer</b> who loves</p>
      
      <p className="home-paragraph">building products and solving problems.</p>
    </div>

      <div className="home-button-container">
        <Link to="/portfolio">
          <button className="home-button">
            Portfolio
          </button>
        </Link>

        <a href={resume} target="_blank" rel="noreferrer noopener">
          <button className="home-button">
             Resume
          </button>
        </a>

        <Link to="/about">
          <button className="home-button">
            About Me
          </button>
        </Link>

        <a href="http://www.cardswithfriendsgame.com" target="_blank" rel="noreferrer noopener">
          <button className="home-button">
            Play my Card Game!
          </button>
        </a>


      </div>
        {/* <h1>Hello! &#128075;</h1> */}
        {/* <p>My name is <b className="orange-pop">Andy Pratt</b> and I am a <b className="blue-pop">Full-Stack Developer</b>.</p> */}

      {/* <div className="profile-pic-container">
        <img className="profile-pic" src={require("../assets/Profile.jpeg")} alt="<APDev/>"></img>  
      </div> */}

    </div>
  );
}