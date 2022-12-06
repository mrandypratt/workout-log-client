import {Routes, Route} from "react-router-dom"
import { About } from "./views/About"
import { Portfolio } from "./views/Portfolio"
import { Home } from "./views/Home"
import { Project } from "./views/Project"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/portfolio/project-v1" element={<Project/>} />
      <Route path="/portfolio/project-v2" element={<Project/>} />
      <Route path="/portfolio/project-v3" element={<Project/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
    </Routes>
  )
}