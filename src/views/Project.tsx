import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import underConstructionPic from "../assets/UnderConstruction.jpg";
import { CWFLogo } from "../assets/CWFLogo";
import "../styles/Project.css"


export const Project = () => {
  return (
    <div className="project-container">

      <Navbar/>

      <div className="project-content-wrapper">

        <div className="picture-container">
          <img className="picture" src={underConstructionPic} alt="Under-Construction"/>
        </div>

        <p className="message-explain">I'm actively working on my full portfolio write-up.</p>
        <p className="message-cta">In the meantime, click the logo below to check out my game!</p>

        <a className="project-link" href="http://www.cardswithfriendsgame.com" target="_blank" rel="noreferrer">
          <CWFLogo/>
        </a>

      </div>

      <Footer/>
    </div>
  );
};