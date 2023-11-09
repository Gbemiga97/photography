import { Route, Routes } from "react-router-dom"
import { About, Contact, Home, Portfolio } from "../pages"


const AnimeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default AnimeRoutes