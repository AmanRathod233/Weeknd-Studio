import Marquee from 'react-fast-marquee';

export default function MarqueeSlider({ slides, cardWidth, cardHeight,border,side }) {
  return (
    <Marquee
      direction={side}
      speed={120}
      gradient={false}
      className="slider-wrapper overflow-hidden py-[17px] bg-[#DFDFDF]"
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
            className="w-full h-full object-cover rounded-md border-2 border-transparent cursor-pointer"
          />
        </div>
      ))}
    </Marquee>
  );
}
