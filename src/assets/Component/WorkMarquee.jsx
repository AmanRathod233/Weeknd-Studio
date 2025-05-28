import Marquee from 'react-fast-marquee';

export default function WorkMarquee({ slides, cardWidth, cardHeight, border, side }) {
  return (
    <>      
     <div className="relative overflow-hidden">
     
      <div className="absolute top-0px left-0 z-10 h-[60px] w-[20%] bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] pointer-events-none" />
      <div className="absolute top-0px right-0 z-10 h-[60px] w-[20%] bg-gradient-to-l from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] pointer-events-none" />

      <Marquee
        direction={side}
        speed={80}
        gradient={false}  
        className="slider-wrapper overflow-hidden my-[17px] relative"
      >
       
        {slides.map((url, index) => (
          <div
            key={index}
            className={`inline-block ${cardWidth} ${cardHeight} flex-shrink-0 rounded-[10px] overflow-hidden ml-4 ${border}`}
          >
            <img
            src={url}
            alt={`thumb-${index}`}
            draggable="false"
            className="w-full h-full object-contain rounded-md  hover:border-white cursor-pointer"
          />
          </div>
        ))}
      </Marquee>
      </div>
    </>
  );
}
