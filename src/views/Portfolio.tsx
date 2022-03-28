import { VIEWS } from "../views";
import { ViewType } from "./ViewType";

export const Portfolio = ({ setView }: ViewType) => {

  const updateToView = {
    home: () => {
      setView(VIEWS.home)
    },
  
    portfolio: () => {
      setView(VIEWS.portfolio)
    },
  
    resume: () => {
      setView(VIEWS.resume)
    },
  
    cardsWithFriends: () => {
      setView(VIEWS.cardsWithFriends)
    },
  
    falseFile: () => {
      setView(VIEWS.falseFile)
    },
  
    inventory: () => {
      setView(VIEWS.inventory)
    },
  
    stockInvetmentApp: () => {
      setView(VIEWS.stockInvestmentApp)
    },
  
    about: () => {
      setView(VIEWS.about)
    }
  }

  return (
    <div>
      <h1>Portfolio</h1>
      <button onClick={updateToView.home}>
        Return Home
      </button>
      <button onClick={updateToView.resume}>
        Resume
      </button>
      <button onClick={updateToView.about}>
        About me
      </button>

    </div>
  );
}