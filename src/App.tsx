import { useState } from "react";
import { VIEWS } from "./constants/views";
import { Navbar } from "./components/Navbar"
import { Home } from "./views/Home";
import { Portfolio } from "./views/Portfolio"
import { Footer } from "./components/Footer";


export const App = (): JSX.Element => {
  const [view, setView] = useState(VIEWS.home); 


  return (
    <div className="light-font" style={{textAlign: "center"}}>
      <Navbar/>

      {view === VIEWS.home && <Home />}
      {view === VIEWS.portfolio && <Portfolio setView={setView}/>}

      <Footer />
    </div>
  )
}

export default App;
