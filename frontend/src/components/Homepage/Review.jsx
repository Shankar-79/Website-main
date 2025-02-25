import  { useState} from "react";
import { motion,} from "framer-motion";
import { useSwipeable } from "react-swipeable";

const reviews = [
  {
    name: "SAlex R., CEO, Puff Apparel",
    image: "https://via.placeholder.com/100",
    rating: 5,
   
    feedback:
      "CROB transformed our online presence and boosted our sales by 200%. Their expertise in automation is unmatched!"
  },
  {
    name: "Sophia G.",
    image: "https://via.placeholder.com/100",
    rating: 5,
    title: "Professional and Reliable",
    feedback:
      "This agency was a pleasure to work with. They were very professional and completed my website ahead of schedule. They also provided valuable suggestions to improve the functionality of my site. I’ll definitely be using their services again.",
  },
  
];


const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlers = useSwipeable({
    onSwiped: () => nextReview(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="p-10 bg-white min-h-screen flex flex-col items-center mt-15relative">
       <h2 className="text-2xl font-semi-bold font-inter mb-10 text-[#D364A3] text-shadow-0px 4px 1px 0px rgba(255, 255, 255, 1) underline decoration-[#D364A3]-600">WHAT CLIENTS SAY ABOUT US</h2>
      <div className="relative w-screen max-w-md  px-8  flex justify-center items-center" {...handlers}>

      {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ x: (i - index) * 5, opacity: i === index ? 1 : 0.5, rotate: (i - index) * 3, scale: i === index ? 1 : 0.9 }}
            animate={{ x: (i - index) * 5, opacity: i === index ? 1 : 0.5, rotate: (i - index) * 3, scale: i === index ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent rounded-3xl px-4 py-6 shadow-xl border-2"
          >
            <div className="bg-[#ECE5E5] rounded-2xl px-6 py-8 shadow-xl text-center relative z-10 mt-10">
              <img
                src={reviews[index].image}
                alt={reviews[index].name}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-300 rounded-xl w-20 h-20 flex items-center justify-center shadow-md"
              />
              <div className="text-yellow-500 ">{'*'.repeat(reviews[index].rating)}</div>
           
            <div className="mt-10">
              <h3 className="font-semibold text-lg mt-2">{reviews[index].title}</h3>
              <p className="text-gray-600 mt-4">{reviews[index].feedback}</p>
              <p className="font-bold text-gray-800 mt-6">{reviews[index].name}</p>
            </div>
            </div>
          </motion.div>
         ))}
      </div>
    </div>
   
  );
};

export default ReviewSlider;
