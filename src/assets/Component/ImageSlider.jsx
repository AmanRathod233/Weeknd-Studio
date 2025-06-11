import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import MotionFadeIn from "./ScrollAnimation";

export default function ImageSlider({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef(null);

  // Check if 80% of the section is in view
  const isInView = useInView(sliderRef, {
    amount: 0.8,  // 80% visibility required
    once: true    // Only trigger once
  });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView, slides.length]);

  return (
    
      <div ref={sliderRef}>
        <motion.img
          key={currentImage}
          src={slides[currentImage]}
          alt="Image Slider"
          className="w-full h-[300px] sm:h-[475px] xl:h-[550px] 2xl:h-[719px] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
   
  );
}

  