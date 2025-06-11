import Marquee from 'react-fast-marquee';
import MotionFadeIn from './ScrollAnimation';
import Icon1 from "../Images1/company_logo1.svg"
import Icon2 from "../Images1/company_logo2.svg"
import Icon3 from "../Images1/company_logo3.svg"
import Icon4 from "../Images1/company_logo4.svg"
import Icon5 from "../Images1/company_logo5.svg"
import Icon6 from "../Images1/company_logo6.svg"
import Icon7 from "../Images1/company_logo7.svg"
import Icon8 from "../Images1/company_logo8.svg"
import Icon9 from "../Images1/company_logo9.svg"
import Icon10 from "../Images1/company_logo10.svg"
import Icon11 from "../Images1/company_logo11.svg"
import Icon12 from "../Images1/company_logo12.svg"
import Icon13 from "../Images1/company_logo13.svg"


export default function CompanySlider() {
  const slides = [
    Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon6,  
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,

  ];

  return (   
  
     <section className="partner px-4">
                <div className="max-w-[1905px]">
                    <div className="stars flex items-center justify-center gap-1">
                        <i className="fa-solid fa-star text-[#ff6304] text-[24px]"></i>
                        <i className="fa-solid fa-star text-[#ff6304] text-[24px]"></i>
                        <i className="fa-solid fa-star text-[#ff6304] text-[24px]"></i>
                        <i className="fa-solid fa-star text-[#ff6304] text-[24px]"></i>
                        <i className="fa-solid fa-star text-[#ff6304] text-[24px]"></i>
                    </div>
                    <div className="heading font-prime pt-[10px] text-center text-[16px] leading-[26px]">
                        <p>Our Partners & Friends Rate Us!</p>
                    </div>
                    </div>
    <div className="relative overflow-hidden pt-[50px] pb-[100px] md:pb-[140px] 2xl:pb-[200px]">
     
      <div className="absolute top-40px left-0 z-10 h-[40px] w-[20%] bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] pointer-events-none" />
      <div className="absolute top-40px right-0 z-10 h-[40px] w-[20%] bg-gradient-to-l from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] pointer-events-none" />
<MotionFadeIn animation="slideUpFade" delay={0.5} duration={0.8}>
 
      <Marquee
        direction="right"
        speed={120}
        gradient={false} // Disable default gradient
        className="slider-wrapper"
        
      >
        {slides.map((url, index) => (
          <div
            key={index}
            className="inline-block h-[40px] flex-shrink-0 rounded-[10px] overflow-hidden ml-[50px]"
          >
            <img
              src={url}
              draggable="false"
              alt={`thumb-${index}`}
              className="w-full h-full object-cover rounded-md border-2 border-transparent hover:border-white cursor-pointer"
            />
          </div>
        ))}
      </Marquee>
    </MotionFadeIn>
    </div>
    </section>
  );
}
