import { VIEWS } from "../views";
import { ViewType } from "./ViewType";

export const Home = ({ setView }: ViewType) => {

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
      <h1>Home</h1>
      <button onClick={updateToView.portfolio}>
        Portfolio
      </button>
      <button onClick={updateToView.resume}>
        Resume
      </button>
      <button onClick={updateToView.about}>
        About me
      </button>
      <a href="https://github.com/mrandypratt">Github</a>
      <a href="http://www.cardswithfriendsgame.com">Cards with Friends</a>
      <a href="http://www.cardswithfriendsgame.com">Cards with Friends</a>
      <a href="https://www.linkedin.com/in/andrewpratt37/">LinkedIn</a>

    </div>
  );
}