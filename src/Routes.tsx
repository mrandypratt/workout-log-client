import {Routes, Route} from "react-router-dom"
import { Register } from "./views/Register"
import { Login } from "./views/Login"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      {/* <Route path="/exercises" element={<Exercises/>} /> */}
      {/* <Route path="/routines" element={<Routines/>} /> */}
      {/* <Route path="/history" element={<History/>} /> */}
      
    </Routes>
  )
}