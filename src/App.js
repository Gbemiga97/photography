import { motion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { AnimeRoutes, Header } from "./components";



function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <AnimeRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
