import Header from "../components/Homepage/Header";
import { useState } from "react";
import HeroPanel from "../components/Homepage/Heropanel";
import SpotlightHeading from "../components/Homepage/Sportlightheading";
import SpotlightFeature from "../components/Homepage/Spotlightfeature";
import ReviewSlider from "../components/Homepage/Review";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  const togglenavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-full w-full flex flex-col ">
      <Header isOpen={isOpen} togglenavbar={togglenavbar} />
      <HeroPanel isOpen={isOpen} />
      <div className="relative w-full flex flex-col items-center px-4 md:px-8 mt-[-50px] pt-10">
        <SpotlightHeading />   
        <SpotlightFeature /> 
      </div>
      
      <div className="w-full flex justify-center items-center py-20">
        <ReviewSlider />
      </div>
    </div>
  );
}
