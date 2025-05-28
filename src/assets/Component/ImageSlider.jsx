import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ImageSlider({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="overflow-hidden"
    >
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
    </motion.div>
  );
}
