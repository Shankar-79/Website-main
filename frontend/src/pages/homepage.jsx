import { useState, useCallback } from "react";
import Header from "../components/Homepage/Header";
import HeroPanel from "../components/Homepage/Heropanel";
import SpotlightHeading from "../components/Homepage/Sportlightheading";
import SpotlightFeature from "../components/Homepage/Spotlightfeature";
import ReviewSlider from "../components/Homepage/Review";
import Footer from "../components/Homepage/Footer";
import Book from "../components/Homepage/Book";
import Clientlogo from "../components/Homepage/Clientlogo";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  
  const togglenavbar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full  overflow-x-hidden ">
      <Header isOpen={isOpen} togglenavbar={togglenavbar} />
      <HeroPanel isOpen={isOpen} />

      <div className="bg-[url('./icons/background2.png')] bg-cover bg-center ">
      <div className="relative w-full flex flex-col items-center px-4 md:px-8  bg-[url('./icons/background2.png')] bg-cover bg-center">
        <SpotlightHeading />
        <SpotlightFeature />
        </div>

      <div className="relative w-full  bg-gradient-to-b from-transparent via-[#D6EADF] via-30% via-[#B8E1D3] via-50% via-[#A7CCE6] via-70% via-[#C4DAF2] to-[#CFDFF5]">
        <ReviewSlider />
        <Clientlogo />
        </div>
      </div>

      <Book />
      <Footer />
    </div>
  );
}
