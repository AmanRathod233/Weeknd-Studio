import EventDesign from "../Component/EventDesign";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import HeroBlock from "../Component/HeroBlock";
import Packy_hero from "../Images1/Packy.webp"
import Packy1 from "../Images1/Home71.webp"
import Packy2 from "../Images1/Home72.webp"
import Packy3 from "../Images1/Home73.webp"
import Packy4 from "../Images1/Home74.webp"
import Packy5 from "../Images1/Home75.webp"
import Packy6 from "../Images1/Home76.webp"
import Packy7 from "../Images1/Home77.webp"
import Packy8 from "../Images1/Home78.webp"

export default function Packy() {
  return (
    <>

      <Header />

      <HeroBlock
        title="Packy"
        description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        imageUrl={Packy_hero}
      />

      <EventDesign
        title="Lorem Ipsum"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged."
        paddingY="py-[50px] lg:py-[100px]"

      />

      <section className="px-4 relative z-10 bg-white">
        <div className="max-w-[1030px] mx-auto space-y-[50px]">

          {[
            Packy1,
            Packy2,
            Packy3,
            Packy4,


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


          <EventDesign
            title="AI Travel Based Platform"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged."

          />

          {[
            Packy5,
            Packy6,
            Packy7,
            Packy8,

          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <a href="#">
                <img
                  src={src}
                  draggable="false"
                  alt=""
                  className="w-full transition-transform duration-300 hover:scale-105 rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="Event design pt-12 rounded-bl-[30px] md:rounded-bl-[40px] lg:rounded-bl-[100px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[100px] shadow-xl bg-white z-10 relative">
        <EventDesign
          title="Lorem Ipsum"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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