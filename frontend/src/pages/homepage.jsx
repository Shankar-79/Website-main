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
    <div className="relative h-full w-full flex flex-col">
      <Header isOpen={isOpen} togglenavbar={togglenavbar} />
      <HeroPanel isOpen={isOpen} />

      <div className="relative w-full flex flex-col items-center px-4 md:px-8 pt-10">
        <SpotlightHeading />
        <SpotlightFeature />
      </div>

      <div className="relative w-full mt-10 bg-gradient-to-b from-transparent via-[#D6EADF] via-600% via-[#B8E1D3] via-50% via-[#A7CCE6] via-70% via-[#C4DAF2] to-[#CFDFF5]">
        <ReviewSlider />
        <Clientlogo />
      </div>

      <Book />
      <Footer />
    </div>
  );
}
