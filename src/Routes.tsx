import {Routes, Route, Navigate} from "react-router-dom"
import { About } from "./views/About"
import { Home } from "./views/Home"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )


}