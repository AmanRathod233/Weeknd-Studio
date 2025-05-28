import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionFadeIn = ({
  children,
  animation = "slideDown", 
  delay = 0.2,
  duration = 1.6,
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    fade: { opacity: isInView ? 1 : 0, y: 0 },
   slideDown: { y: isInView ? 0 : -40 },
    slideUp: { y: isInView ? 0 : 50 },
    slideLeft: { opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 },
    slideRight: { opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 },
    zoomIn: { opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 },

   
    slideDownFade: { opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 },
    slideUpFade: { opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 },
    slideLeftFade: { opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 },
    zoomFade: { opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.17, 0.67, 0.83, 0.67],
      }}
      variants={{
        hidden: variants[animation],
        visible: { ...variants[animation] },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeIn;
