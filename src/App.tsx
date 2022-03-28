import { useState } from "react";
import { VIEWS } from "./views";
import { Home } from "./views/Home";
import { Portfolio } from "./views/Portfolio"
import { Error } from "./views/Error";

export const App = (): JSX.Element => {
  const [view, setView] = useState(VIEWS.home); 
  
  if (view === VIEWS.home) {
    return (
      <Home setView={setView}/>
    );
  }

  if (view === VIEWS.portfolio) {
    return (
      <Portfolio setView={setView}/>
    )
  }

  return (
    <Error view={view}/>
  );
}

export default App;
