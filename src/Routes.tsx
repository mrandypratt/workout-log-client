import {Routes, Route} from "react-router-dom"
import { Register } from "./views/Register"
import { Home } from "./views/Home"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}