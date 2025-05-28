import Footer from "../Component/Footer";
import Header from "../Component/Header";
import EventDesign from "../Component/EventDesign";
import HeroBlock from "../Component/HeroBlock";
import ColorPallet from "../Images1/ColorPallet.webp"
import Helavetica from "../Images1/Helavetica.webp"
import Nohemi from "../Images1/Nohemi.webp"
import Pixbyte from "../Images1/pixbyte.webp"
import Pixbyte1 from "../Images1/24.webp"
import Pixbyte2 from "../Images1/25.webp"
import Pixbyte3 from "../Images1/Frame1948754836.webp"
import Pixbyte4 from "../Images1/Home21.webp"
import Pixbyte5 from "../Images1/Home22.webp"
import Pixbyte6 from "../Images1/Home23.webp"
import Pixbyte7 from "../Images1/Home24.webp"
import Pixbyte8 from "../Images1/Home25.webp"
import Pixbyte9 from "../Images1/Home26.webp"
import Pixbyte10 from "../Images1/Home27.webp"
import Pixbyte11 from "../Images1/Home28.webp"
import Pixbyte12 from "../Images1/Review.webp"
import Pixbyte13 from "../Images1/Account.webp"




export default function PixbyteFuturetrch() {
  return (
    <>
    
      <Header />

      <HeroBlock
        title="Pixbyte Futuretech"
        description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        imageUrl={Pixbyte}
      />

      <EventDesign
        title="Lorem Ipsum "
        content="  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged."
                   paddingY="py-[50px] lg:py-[100px]"
      />

      <section className="px-4 relative z-10 bg-white">
        <div className="max-w-[1030px] mx-auto space-y-12">

          {[
           ColorPallet,
            Helavetica,
           Nohemi,
           
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <a href="#">
                <img src={src} alt="" className="transition-transform duration-300 hover:scale-105 w-full" draggable="false" />
              </a>
            </div>
          ))}

           <div className="bg-[#EFF6F6] rounded-lg flex items-center justify-center px-[40px] lg:px-[80px] py-[50px] lg:py-[105px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {[
          Pixbyte1,
          Pixbyte2,
          Pixbyte3,
        ].map((src,index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
      <a href="#">
                <img src={src} alt="" className="transition-transform duration-300 hover:scale-105 w-full h-full" draggable="false" />
              </a>
    </div>
        ))}
      </div>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[Pixbyte12,Pixbyte13].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-2xl">
                <a href="#">
                  <img src={src} alt="" className="w-full transition-transform duration-300 hover:scale-105" draggable="false" />
                </a>
              </div>
            ))}
          </div>

         

          {[
            
            [Pixbyte4, Pixbyte5],
            [Pixbyte6, Pixbyte7],
            [Pixbyte8, Pixbyte9],
            [Pixbyte10, Pixbyte11],
          ].map((pair, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pair.map((src, colIndex) => (
                <div key={colIndex} className="overflow-hidden rounded-2xl">
                  <a href="#">
                    <img src={src} alt="" className="w-full transition-transform duration-300 hover:scale-105" draggable="false" />
                  </a>
                </div>
              ))}
            </div>
          ))}

        </div>
      </section>

     <section className="Event design pt-12 rounded-bl-[30px] md:rounded-bl-[40px] lg:rounded-bl-[60px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[60px] shadow-xl bg-white z-10  relative">
        <EventDesign
          title=" Lorem Ipsum"
          content="  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged."
                paddingY="pb-[50px] lg:pb-[100px]"
              
        />
      </section>

      <Footer />
    </>
  );
}
