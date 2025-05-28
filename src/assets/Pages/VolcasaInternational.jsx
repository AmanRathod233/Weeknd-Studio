import Footer from "../Component/Footer";
import Header from "../Component/Header";
import EventDesign from "../Component/EventDesign";
import HeroBlock from "../Component/HeroBlock";
import Volcasa_Hero from "../Images1/Volcasa_Hero.webp"
import Volcasa1 from "../Images1/Home51.webp"
import Volcasa2 from "../Images1/Home52.webp"
import Volcasa3 from "../Images1/Home53.webp"
import Volcasa4 from "../Images1/Volcasa51.webp"
import Volcasa5 from "../Images1/Volcasa52.webp"
import Volcasa6 from "../Images1/Volcasa53.webp"
import Volcasa7 from "../Images1/Volcasa54.webp"
import Volcasa8 from "../Images1/Volcasa55.webp"
import Volcasa9 from "../Images1/Volcasa56.webp"
import Volcasa10 from "../Images1/Volcasa57.webp"
import Volcasa11 from "../Images1/Volcasa58.webp"
import Volcasa12 from "../Images1/Volcasa59.webp"




export default function Volcasa() {
    return (
        <>

            <Header />

            <HeroBlock
                title="Volcasa International"
                description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                imageUrl={Volcasa_Hero}
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
            <section className="px-4 relative z-10 bg-white
            ">
                <div className="max-w-[1030px] mx-auto space-y-12">
                    {[
                        Volcasa1,
                        Volcasa2,
                        Volcasa3,


                    ].map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl">
                            <a href="#">
                                <img src={src} alt="" className="transition-transform duration-300 hover:scale-105 w-full" draggable="false" />
                            </a>
                        </div>
                    ))}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[33px] p-[20px] sm:p-[43px] bg-[#F9F9F9] rounded-2xl">
                        {[
                            Volcasa4,
                            Volcasa5,
                            Volcasa6,
                            Volcasa7,
                            Volcasa8,
                            Volcasa9,
                            Volcasa10,
                            Volcasa11,
                            Volcasa12,

                        ].map((src, index) => (
                            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg">
                                <div className="overflow-hidden rounded-lg">
                                    <a href="#">
                                        <img
                                            src={src}
                                            alt=""
                                            className="transition-transform duration-300 hover:scale-105 w-full h-64 object-cover"
                                            draggable="false"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="Event design pt-12 rounded-bl-[30px] md:rounded-bl-[40px] lg:rounded-bl-[60px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[60px] shadow-xl bg-white z-10 relative">
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