import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Startlogo() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#F9F9F9]">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="w-full h-screen flex justify-center items-center bg-[#F9F9F9]"
            initial={{ opacity: 1, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
           <img src="./icons/crobwhite.png" alt="Splash Logo" className="w-1/2 h-auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
