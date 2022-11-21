import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import profilePic from "../assets/Profile.jpg";
import "../styles/About.css";

export const About = () => {

  return (
    <div className="about-container">
      <Navbar/>

      <h1 className="about-header">
        People. Process. Problem-Solving.
      </h1>
      
      <div className="about-content">
        
        <h2 className="about-section-header">A Passion for Learning</h2>

        <p>For as long as I can remember, I have always enjoyed learning new things, meeting new people, and solving problems. The journey of my twenties has been in search of the combination of these three passions. I found love for people in restaurant work, love for process in accounting, and love for problem-solving in programming.</p>

        <h2 className="about-section-header">Pursuing Software</h2>

        <p>I have always used computers and appreciated the impact computers have had on my life, but I never thought it was something I could learn!  The first time I touched a Code Editor was in August 2020, and I haven't stopped since.  That journey has lead me through multiple online courses, personal projects, and workplace automations.  The goal now is to take my journey of software to a higher level where I can have a positive impact on people by problem-solving.</p>

        <h2 className="about-section-header">Work Aside...</h2>

        <p>In my personal life, I am obsessed with fitness, habits, and productivity. These obsessions keep me in the gym and have helped me undergo this shift toward becoming a programmer and aspiring Software Engineer. I love podcasts, with my favorites being Lex Fridman, Tim Ferriss, and Andrew Huberman. I love playing board games and video games, going to music and comedy shows, playing tennis, working out, hiking, and traveling.</p>

      </div>

      <div className="about-pictures">
        <img className="profile-pic" src={profilePic} alt="Profile-Pic" width="100%"/>
      </div>

      <Footer/>

    </div>
  );
}