import EventDesign from "../Component/EventDesign";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import HeroBlock from "../Component/HeroBlock";
import HouseGoa from "../Images1/HouseGoa.webp"
import Monigue from "../Images1/Monigue.webp"
import HouseGoa1 from "../Images1/Image1.webp"
import HouseGoa2 from "../Images1/Image2.webp"
import HouseGoa3 from "../Images1/LinkedinCover.webp"
import HouseGoa4 from "../Images1/Image3.webp"
import HouseGoa5 from "../Images1/Image4.webp"
import HouseGoa6 from "../Images1/Invitation.webp"
import HouseGoa9 from "../Images1/Invitation1.webp"
import HouseGoa10 from "../Images1/Web1.webp"
import Sticker1 from "../Images1/Sticker1.svg"
import Sticker2 from "../Images1/Sticker2.svg"
import Sticker3 from "../Images1/Sticker3.svg"
import Sticker4 from "../Images1/Sticker4.svg"
import Sticker5 from "../Images1/Sticker5.svg"
import Sticker6 from "../Images1/Sticker6.svg"
import Sticker7 from "../Images1/Sticker7.svg"
import Sticker8 from "../Images1/Sticker8.svg"
import Sticker9 from "../Images1/Sticker9.svg"


export default function HackerHouseGoa() {
  return (
    <>
      <Header />

      <HeroBlock
        title="Hacker House Goa"
        description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        imageUrl={HouseGoa}
      />

      <EventDesign
        title="Event Design"
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
            Monigue,
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <a href="#">
                <img
                  src={src}
                  alt=""
                  draggable="false"
                  className="w-full transition-transform duration-300 hover:scale-105 rounded-lg"
                />
              </a>
            </div>
          ))}

          {[
            [HouseGoa1, HouseGoa2],

          ].map((pair, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pair.map((src, colIndex) => (
                <div key={colIndex} className="overflow-hidden rounded-2xl">
                  <a href="#">
                    <img
                      src={src}
                      alt=""
                      draggable="false"
                      className="w-full transition-transform duration-300 hover:scale-105 rounded-lg"
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}


          {[
            HouseGoa3,
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl ">
              <a href="#">
                <img
                  src={src}
                  alt=""
                  draggable="false"
                  className="w-full transition-transform duration-300 hover:scale-105 rounded-lg"
                />
              </a>
            </div>
          ))}

          {[
            [HouseGoa4, HouseGoa5],

          ].map((pair, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pair.map((src, colIndex) => (
                <div key={colIndex} className="overflow-hidden rounded-2xl">
                  <a href="#">
                    <img
                      src={src}
                      alt=""
                      draggable="false"
                      className="w-full transition-transform duration-300 hover:scale-105 rounded-lg"
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}


          {[
            HouseGoa6,

          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <a href="#">
                <img
                  src={src}
                  alt=""
                  draggable="false"
                  className="w-full transition-transform duration-300 hover:scale-105 rounded-lg"
                />
              </a>
            </div>
          ))}

          <div className="grid grid-cols-1 gap-[18px] py-[15px] px-[15px]  sm:py-[40px] sm:px-[28px] bg-[#edebdf] rounded-2xl">
            {[
              Sticker7,
              Sticker8,
              Sticker9,

            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-md">
                <a href="#">
                  <img
                    src={src}
                    alt=""
                    draggable="false"
                    className="w-full transition-transform duration-300 hover:scale-102"
                  />
                </a>
              </div>
            ))}
          </div>



          <div className="grid grid-cols-2  lg:grid-cols-3 gap-[20px] lg:gap-[33px] p-[20px] sm:p-[43px] bg-[#edebdf] rounded-2xl">
            {[
              { src: Sticker1, height: '202px', width: '197px' },
              { src: Sticker2, height: '220px', width: '323px' },
              { src: Sticker3, height: '150px', width: '175px' },
              { src: Sticker4, height: '190px', width: '217px' },
              { src: Sticker5, height: '100%', width: '223px' },
              { src: Sticker6, height: '226px', width: '255px' },
            ].map(({ src, height, width }, index) => (
              <div
                key={index}
                className="relative overflow-hidden flex justify-center items-center"
              >
                <div className="overflow-hidden">
                  <a href="#">
                    <img
                      src={src}
                      alt={`Sticker ${index + 1}`}
                      style={{
                        width: '100%',
                        maxWidth: width,
                        height: 'auto',
                        maxHeight: height,
                      }}
                      className="transition-transform duration-300 hover:scale-105 object-contain sm:object-cover"
                      draggable="false"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>


          {[
            HouseGoa9,
            HouseGoa10,

          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <a href="#">
                <img
                  src={src}
                  alt=""
                  draggable="false"
                  className="w-full transition-transform duration-300 hover:scale-105 rounded-lg"
                />
              </a>
            </div>
          ))}




        </div>
      </section>


      <section className="Event design pt-12 rounded-bl-[30px] md:rounded-bl-[40px] lg:rounded-bl-[100px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[100px] shadow-xl bg-white z-10 relative">
        <EventDesign
          title="Event Design"
          content="  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged."
          paddingY="py-[50px] lg:py-[100px]"
        />
      </section>

      <Footer />
    </>
  );
}
