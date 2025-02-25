import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function SpotlightFeature() {
  const images = ["./icons/spotlight1.png","./icons/spotlight2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <motion.div
      ref={ref}
      className="bg-[#BEBEBE33] rounded-2xl shadow-lg p-4 w-full text-left mt-2"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.h3
        className="text-xl font-roboto font-bold text-black mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        CHROMACRAFT
      </motion.h3>
      <motion.p
        className="w-[88%] text-[#140000] mt-4 font-semibold font-roboto text-lg leading-snug drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Dive into the world of color with innovative design projects that explore the dynamic interplay of hues and shades, pushing the boundaries of visual expression.
      </motion.p>
      <motion.button
        className="mt-6 border-2 border-black text-black font-medium font-roboto px-7 py-2 rounded-full flex items-center gap-2 shadow-[0px_4px_8.6px_0px_#C0B1FF] drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        SEE MORE
      </motion.button>
      <motion.div
        className="mt-2 w-full rounded-xl overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <img
          src={images[currentIndex]}
          alt="Project Preview"
          className="w-full h-auto rounded-xl object-cover"
        />
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md text-white" 
          onClick={nextImage}
        >
          <ArrowRight size={25} />
        </button>
      </motion.div>
    </motion.div>
  );
}

