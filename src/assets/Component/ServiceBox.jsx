import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ServiceBox({ title, description, iconSrc, imageSrc }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="sticky top-[20%] my-10 flex items-center justify-center"
>
  
  <div className="w-full max-w-6xl service_box border border-[#DFDFDF] p-6 md:p-10 rounded-[20px] bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[100px]">
      <div className="service_detail">
        <div className="service_icon bg-[#ECECEC] w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center text-white text-[24px] rounded-[10px] mb-5">
          <img src={iconSrc} alt="icon"  draggable="false"/>
        </div>
        <div className="service_text">
          <h3 className="service_heading font-prime font-[700] tracking-[0.7px] text-[24px] md:text-[30px] leading-[36px] md:leading-[42px] text-[#171717]">
            {title}
          </h3>
          <p className="service_content pt-[6px] font-prime text-[#606060] text-[16px] md:text-[18px] leading-[26px]">
            {description}
          </p>
        </div>
      </div>
      <div className="service_box_image flex justify-end">
        <img src={imageSrc} alt="service" className="w-full max-w-[392px]" draggable="false" />
      </div>
    </div>
  </div>
  
</motion.div>

  );
}
