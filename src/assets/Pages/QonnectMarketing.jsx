
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import EventDesign from "../Component/EventDesign";
import HeroBlock from "../Component/HeroBlock";
import Qoneqt from "../Images1/Qoneqt1.webp"
import Qoneqt1 from "../Images1/Home31.webp"
import Qoneqt2 from "../Images1/Home32.webp"
import Qoneqt3 from "../Images1/Home33.webp"
import Qoneqt4 from "../Images1/Home34.webp"
import Qoneqt5 from "../Images1/Home35.webp"
import Qoneqt6 from "../Images1/Home36.webp"
import Qoneqt7 from "../Images1/Home37.webp"
import Qoneqt8 from "../Images1/Home38.webp"
import Qoneqt9 from "../Images1/Home39.webp"
import Qoneqt10 from "../Images1/Home310.webp"
import Qoneqt11 from "../Images1/Home311.webp"
import Qoneqt12 from "../Images1/Home312.webp"
import Qoneqt13 from "../Images1/Home313.webp"
import Qoneqt14 from "../Images1/Invitation31.webp"

export default function QonnectMarketing() {
    return (
        <>

            <Header />

            <HeroBlock
                title="Qonnect Marketing"
                description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                imageUrl={Qoneqt}
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
                        [Qoneqt1, Qoneqt2],
                        [Qoneqt3, Qoneqt4],
                        [Qoneqt5, Qoneqt6],
                        [Qoneqt7, Qoneqt8],
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

                    

                    {[
                        [Qoneqt9, Qoneqt10],
                        [Qoneqt11, Qoneqt12],
                        [Qoneqt12, Qoneqt13],

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
            <section className="Event design pt-12 rounded-bl-[30px] md:rounded-bl-[40px] lg:rounded-bl-[60px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[60px] shadow-xl bg-white z-10 relative">
                <EventDesign
                    title="Event Design"
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