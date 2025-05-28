import ImageSlider from './ImageSlider';
import MarqueeSlider from './MarqueeSlider';
import Deck from "../Images1/Deck.webp"
import Nillion from "../Images1/Nillion.webp"
import HOP from "../Images1/HOP.webp"
import Packy from "../Images1/Packy.webp"
import Volcasa2 from "../Images1/Volcasa2.webp"
import Onchainisland from "../Images1/Onchainisland.webp"
import TUC from "../Images1/TUC.webp"
import Spark from "../Images1/Spark.webp"
import Qonnect from "../Images1/Qonnect.webp"
import Upfynd from "../Images1/Upfynd.webp"
import Cake from "../Images1/Cake.webp"

export default function DoubleCarousel() {
  const slides = [
    Deck,
    HOP,
    Nillion,
    Packy,
    Volcasa2,
    Onchainisland,
    TUC,
    Spark,
    Qonnect,
    Upfynd,
    Cake
  ];

  return (
    
       
      <div className="w-full max-w-[91.50%] lg:max-w-[1240px] mx-auto rounded-2xl sm:rounded-[40px] overflow-hidden mb-[100px]">
        <ImageSlider slides={slides} />
        
        <MarqueeSlider
          slides={slides}
          cardWidth="w-[150px] sm:w-[200px]"
          cardHeight="h-[100px] sm:h-[116px]"
          side="right"
        />
      </div>
   
  );
}
