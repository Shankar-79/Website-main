import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const spotlightData = [
  {
    title: "E-commerce Excellence",
    brand: "Puff Apparel",
    description:
      "Developed a high-performance e-commerce store with seamless checkout, AI-driven product recommendations, and an engaging UI to boost conversions.",
    image: "your-image-url-1",
  },
  {
    title: "Tech Innovation",
    brand: "Smart Gadgets",
    description:
      "Built a cutting-edge tech store featuring smart filtering, fast checkout, and personalized suggestions for an enhanced user experience.",
    image: "your-image-url-2",
  },
  
];

const SpotlightFeature = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % spotlightData.length);
    } else if (event.key === "ArrowLeft") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + spotlightData.length) % spotlightData.length
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="bg-[#BEBEBE33] rounded-2xl shadow-lg p-4 w-full text-left mt-2 ml-20 mr-20"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.h2
        className="text-xl font-roboto font-bold text-black mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {spotlightData[currentIndex].title}
      </motion.h2>
      <motion.p
        className="text-sm text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {spotlightData[currentIndex].brand}
      </motion.p>
      <motion.p
        className="mt-2 text-gray-700 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {spotlightData[currentIndex].description}
      </motion.p>
      <motion.img
        src={spotlightData[currentIndex].image}
        alt="Spotlight"
        className="mt-4 w-full max-w-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
      />
    </motion.div>
  );
};

export default SpotlightFeature;
