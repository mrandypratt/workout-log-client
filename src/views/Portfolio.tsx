import { VIEWS } from "../constants/views"
import { ViewType } from "../styles/ViewType"

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