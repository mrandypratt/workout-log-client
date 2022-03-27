import { useState } from "react";
import { VIEWS } from "./views";
import { Main } from "./views/Main";
import { Error } from "./views/Error";

export const App = (): JSX.Element => {
  const [view, setView] = useState(VIEWS.main); 
  
  if (view === VIEWS.main) {
    return (
      <Main setView={setView}/>
    );
  }

  return (
    <Error/>
  );
}

export default App;
