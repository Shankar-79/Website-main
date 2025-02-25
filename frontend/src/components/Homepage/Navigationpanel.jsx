import { motion } from "framer-motion";
const navLinks = [
  { name: "Home", href: "../pages/homepage.jsx" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" }
];

export default function Navigationpanel({ isOpen }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: isOpen ? 1 : 0.5, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={`fixed inset-0 flex justify-center items-center z-40 
                  w-19/20 h-4/6 bg-[#A488CB]/20 backdrop-blur-lg px-12 mt-32 mr-3 ml-3
                  shadow-lg rounded-xl border-[#858484] transition-all`}
      style={{ display: isOpen ? "flex" : "none" }} 
    >
      <div className="flex flex-col items-center justify-center space-y-16 py-16">
      {navLinks.map((link, index) => (
    <a
      key={index}
      href={link.href}
              className="text-3xl font-semibold hover:scale-110 transition-transform text-white leading-[27.5px] shadow-[0px_4px_4px_rgba(255, 255, 255, 1)]"
            >
              {link.name}
            </a>
          )
        )}
      </div>
    </motion.div>
  );
}
