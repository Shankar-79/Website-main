import { Menu, X } from "lucide-react"; 
import Navigationpanel from "./Navigationpanel";

export default function Header({ togglenavbar, isOpen }) {
  return (
    <><div className=" bg-transparent transition-all">
      <header className="absolute top-0 left-0 w-full px-8 py-3 flex justify-between items-center bg-[#222121]/20 backdrop-blur-md rounded-3xl shadow-md text-white z-50 ">

        <img src="/icons/headerlogo.png" alt="Logo" className="h-10 w-auto" />
        <button
          onClick={togglenavbar}
          className="text-white font-bold text-2xltransition"
        >
          {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
        </button>
      </header>

      <Navigationpanel isOpen={isOpen} toggleSidebar={togglenavbar} />
      </div>
    </>
  );
}
