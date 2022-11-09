import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { MainRoutes } from "./Routes"

export const App = (): JSX.Element => {
  return (
    <div className="app">
      <Navbar/>

      <MainRoutes/>
      
      <Footer/>
    </div>
  )
}