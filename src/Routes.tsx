import {Routes, Route} from "react-router-dom"
import { Register } from "./views/Register"
import { Login } from "./views/Login"
import { Exercises } from "./views/Exercises"
import { Routines } from "./views/Routines"
import { History } from "./views/History"

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/exercises" element={<Exercises />} />
    <Route path="/routines" element={<Routines />} />
    <Route path="/history" element={<History />} />
  </Routes>
)