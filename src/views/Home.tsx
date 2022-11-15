import { Button } from "@mui/material"

export const Home = () => {

  return (
    <div className="home page-container">
      <h1 className="home-greeting">Hello! My name is </h1>
      <h2 className="orange-pop">Andy Pratt.</h2>

      <p className="home-paragraph">I'm a product-oriented <b className="blue-pop">Software Engineer</b> who loves building products and automating processes.</p>
        {/* <h1>Hello! &#128075;</h1> */}
        {/* <p>My name is <b className="orange-pop">Andy Pratt</b> and I am a <b className="blue-pop">Full-Stack Developer</b>.</p> */}

      {/* <div className="profile-pic-container">
        <img className="profile-pic" src={require("../assets/Profile.jpeg")} alt="<APDev/>"></img>  
      </div> */}

    </div>
  );
}