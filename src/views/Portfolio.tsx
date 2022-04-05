import { VIEWS } from "../views"
import { ViewType } from "./ViewType"

export const Portfolio = ({ setView }: ViewType) => {

  const updateToView = {
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

    </div>
  );
}