

export const Home = () => {

  return (
    <div className="home">

      <div className="greeting-container">
        <h1>Hello! &#128075;</h1>
        <p>My name is <b className="orange-pop">Andy Pratt</b> and I am a <b className="blue-pop">Full-Stack Developer</b>.</p>
      </div>

      <div className="profile-pic-container">
        <img className="profile-pic" src={require("../Profile.jpeg")} alt="<APDev/>"></img>  
      </div>

    </div>
  );
}