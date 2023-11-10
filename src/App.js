import { motion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { AnimeRoutes, Header } from "./components";



function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
      <Header />
      <AnimeRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
