import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/Portfolio.css"

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar/>
      <div className="portfolio-heading-container">
        <h1 className="portfolio-heading">
          Cards with Friends
        </h1>
      </div>

      <div className="portfolio-summary-container">
        <p className="portfolio-summary">
          Cards with Friends is an online multi-player Cards Against Humanity clone that can be played online in any modern web browser.
        </p>

        <p className="portfolio-summary">
          When deciding on a project, my mentor suggested I do something fun and tossed out Cards Against Humanity as an option.  I was hesitant at first, but the more I thought about it, the more fun it sounded.  Now, close to a year later, it is alive!
        </p>
      </div>

      <div className="portfolio-cta-container">
        <h2 className="portfolio-cta">
          Please check out my Cards with Friends journey below!
        </h2>
      </div>

      <div className="portfolio-project-card-container" id="project1">
        <h3 className="portfolio-project-card">
          V1: Single-Device (MVP)
        </h3>
      </div>

      <div className="portfolio-project-card-container" id="project2">
        <h3 className="portfolio-project-card">
          V2: Multi-Device
        </h3>
      </div>

      <div className="portfolio-project-card-container" id="project3">
        <h3 className="portfolio-project-card">
          V3: Single-Player
        </h3>
      </div>

      <div className="left-padding"></div>
      <div className="right-padding"></div>

      <Footer/>
    </div>
  );
}