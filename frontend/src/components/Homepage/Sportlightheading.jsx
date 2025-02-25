import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SpotlightHeading() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center w-screen overflow-hidden mt-6">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center w-full"
      >
       
        <h2 className="inline-block text-2xl font-extrabold text-black uppercase tracking-wide text-center bg-transparent drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]">
          SPOTLIGHTED FEATURED
        </h2>

       
        <div className="relative flex items-center w-full justify-center -mt-1">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[30%] border-t border-black"
          ></motion.div>

          <h2 className="inline-block mx-4 text-2xl font-roboto font-extrabold text-black uppercase tracking-wide text-center bg-transparent drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]">
            PROJECT
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[30%] border-t border-black"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}
