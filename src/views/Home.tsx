

export const Home = () => {

  return (
    <div style={{textAlign: "center", fontStyle: "Roboto"}}>

      <div style={{float: "left", textAlign: "left", marginLeft: "10%", marginTop: "10%"}}>
        <h1 style={{fontSize: "1.5em"}}>Hello!</h1>
        <p>My name is <b className="orange-pop">Andy Pratt</b> and</p>
        <p>I am a <b className="blue-pop">Full-Stack Developer</b>.</p>
      </div>


      <div style={{float: "right", maxWidth: "50%"}}>
        <img src={require("../Profile.jpeg")} alt="<APDev/>" style={{maxWidth: "75%", height: "auto"}}></img>  
      </div>
    </div>
  );
}