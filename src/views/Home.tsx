

export const Home = () => {

  return (
    <div className="homepage">

      <div className="landing">
        
        <div className="split left">

          <div className="centered greeting">
            <h1>Hello! &#128075;</h1>
            <p>My name is <b className="orange-pop">Andy Pratt</b> and</p>
            <p>I am a <b className="blue-pop">Full-Stack Developer</b>.</p>
          </div>

        </div>

        <div className="split right">

          <div className="centered profile-pic">
            <img src={require("../Profile.jpeg")} alt="<APDev/>"></img>  
          </div>

        </div>

      </div>

    </div>
  );
}