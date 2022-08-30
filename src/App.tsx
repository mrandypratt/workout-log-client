import { useState } from "react";
import { VIEWS } from "./constants/views";
import { Navbar } from "./components/Navbar"
import { Home } from "./views/Home";
import { Portfolio } from "./views/Portfolio"
import { Resume } from "./views/Resume";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export const App = (): JSX.Element => {
  const [view, setView] = useState(VIEWS.home); 

  useEffect(() => {
    document.body.style.backgroundColor = "#292929";
    document.body.style.fontStyle = "Roboto";
    document.body.style.color = "white";
    
    return () => {
      document.body.style.backgroundColor = "white";
    };
  });


  return (
    <div className="light-font" style={{textAlign: "center"}}>
      <Navbar setView={setView}/>

      {view === VIEWS.home && <Home />}
      {view === VIEWS.portfolio && <Portfolio setView={setView}/>}

      <Footer />
    </div>
  )
}

export default App;
