import { VIEWS } from "../views";
import { ViewType } from "./ViewType";

export const Main = ({ setView }: ViewType) => {

  

  const updateView = (view: string, setView: (view: string) => void) => {
    setView(view);
  }
  
  const updateToView = {
    main: () => {
      updateView(VIEWS.main, setView)
    },
  
    portfolio: () => {
      updateView(VIEWS.portfolio, setView)
    },
  
    resume: () => {
      updateView(VIEWS.resume, setView);
    },
  
    cardsWithFriends: () => {
      updateView(VIEWS.cardsWithFriends, setView);
    },
  
    falseFile: () => {
      updateView(VIEWS.falseFile, setView);
    },
  
    inventory: () => {
      updateView(VIEWS.inventory, setView);
    },
  
    stockInvetmentApp: () => {
      updateView(VIEWS.stockInvestmentApp, setView);
    },
  
    about: () => {
      updateView(VIEWS.about, setView);
    }
  }

  return (
    <div>
      Home

      <button onClick={updateToView.portfolio}>
        Portfolio
      </button>
    </div>
  );
}