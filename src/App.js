import { motion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { AnimeRoutes, Header } from "./components";
import { useCursorContext } from "./context/CursorContext";



function App() {

  const {cursorVariants, cursorBg} = useCursorContext()

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
      <Header />
      <AnimeRoutes />
      </BrowserRouter>
      <motion.div
      variants={cursorVariants}
      animate={cursorBg}
      className="hidden xl:block w-8 h-8 bg-primary fixed top-0 left-0 
      pointer-events-none z-50 rounded-full" />
    </div>
  );
}

export default App;
