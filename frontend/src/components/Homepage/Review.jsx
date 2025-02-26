import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const reviews = [
  {
    name: "Alex R., CEO, Puff Apparel",
    image: "",
    rating: 5,
    feedback:
      "CROB transformed our online presence and boosted our sales by 200%. Their expertise in automation is unmatched!",
  },
  {
    name: "Sophia G.",
    image: "",
    rating: 5,
    title: "Professional and Reliable",
    feedback:
      "This agency was a pleasure to work with. They were very professional and completed my website ahead of schedule. They also provided valuable suggestions to improve the functionality of my site. I’ll definitely be using their services again.",
  },
  {
    name: "Michael T.",
    image: "",
    rating: 4,
    feedback:
      "Great service! The team was very responsive and delivered exactly what I needed. I highly recommend them!",
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextReview,
    onSwipedRight: prevReview,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="p-10 bg-white h-full flex flex-col items-center mt-15 relative mb-50">
       <h2 className="text-2xl font-semibold font-inter mb-10 text-[#D364A3] underline whitespace-nowrap shadow-lg">
        WHAT CLIENTS SAY ABOUT US
      </h2>

        <div className="relative w-screen max-w-md px-8 mt-50 flex justify-center items-center" {...handlers}>
        {reviews.map((review, i) => {
          const distance = i - index;
          let opacity = 1 - Math.abs(distance) * 0.3;
          let scale = 1 - Math.abs(distance) * 0.1;
          let zIndex = 10 - Math.abs(distance);
          let rotateY = distance * 20; 
          let rotateX = Math.abs(distance) * 5; 
          let translateX = distance * 50;


          return (
            <motion.div
              key={i}
              style={{ zIndex }}
              initial={{ opacity, scale, rotateY, rotateX, x: translateX }}
              animate={{ opacity, scale, rotateY, rotateX, x: translateX }}
              transition={{ duration: 0.5 }}
              className="bg-white absolute w-80 px-4 py-6 shadow-xl border-2 rounded-3xl"
            >
               <div className="bg-[#ECE5E5] rounded-2xl px-6 py-8 shadow-xl text-center relative z-10 mt-12">
            <img
              src={reviews[index].image}
              alt={reviews[index].name}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-300 rounded-xl w-20 h-20 shadow-md"
            />
            <div className="text-yellow-500">{'*'.repeat(reviews[index].rating)}</div>
              <p className="text-gray-600 mt-4">{reviews[index].feedback}</p>
              <p className="font-bold text-gray-800 mt-6">{reviews[index].name}</p>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSlider;
