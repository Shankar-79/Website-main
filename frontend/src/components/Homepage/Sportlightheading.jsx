
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function SpotlightFeature () {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center w-screen overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center w-full p-6 bg-transparent mt-2"
      >
        <img src="./icons/faquoteright.png" className="w-10 h-10 absolute top-0 left-0 " />
        <p className="font-roboto font-medium text-lg leading-relaxed tracking-normal text-center">
        At CROB, we go beyond websites. We engineer innovative web solutions, AI-driven automation, and data-powered digital strategies to fuel business growth. Our expertise ensures seamless user experiences, streamlined operations, and impactful online presence tailored for your success.
        </p>
        <img src="./icons/faquoteleft.png" className="w-10 h-10 absolute bottom-18 right-5 " />
        <div className="mt-4 flex items-center">
          <div className="w-10 h-10 bg-gray-400 rounded-full mr-3"></div>
          <div className="flex flex-col">
          <p className="font-roboto font-bold text-sm leading-snug">Nagesh Merva</p>
          <p className="text-xs text-gray-600 leading-snug">Co-founder & CEO</p>
            </div>
        </div>
      </motion.div>

      <div className="relative flex items-center w-full justify-center mt-6">
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
    </div>
  );
};


