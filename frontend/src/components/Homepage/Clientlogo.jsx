import { motion } from "framer-motion";


const logos = [
  { src: "./icons/Dior.png", alt: "Dior" },
  { src: "./icons/varsace.png", alt: "Versace" },
  { src: "./icons/gucci.png", alt: "Gucci" },
  { src: "./icons/prada.png", alt: "Prada" },
  {src:"./icons/airjordon.png", alt:"Air-jordon"}
];

export default function Clientlogo() {
  return (
    <div className="py-10 text-center overflow-hidden">
      <h2 className="text-xl font-bold mb-4 border-t-2 border-b-2 inline-block px-4 py-2">Our Clients</h2>
      <motion.div
        className="flex space-x-6 mt-6 w-max"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="w-48 h-48 flex-shrink-0">
          <img
              src={logo.src} 
              alt={logo.alt} 
              width={192} 
              height={192} 
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
