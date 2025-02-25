
import Homepage from "./pages/homepage"
import Startlogo from "./components/startlogo";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";


function App() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    
  const [showSplash, setShowSplash] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      setShowHeader(true);
    }, 3000);
  }, []);

  return (
   <>
      <AnimatePresence>{showSplash && <Startlogo />}</AnimatePresence>
      <AnimatePresence>{showHeader && <Homepage isOpen={isOpen} toggleSidebar={toggleSidebar} />}</AnimatePresence>
      
  </>
  );
}

export default App
