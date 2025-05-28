import Footer from "../Component/Footer";
import Header from "../Component/Header";
import EventDesign from "../Component/EventDesign";
import HeroBlock from "../Component/HeroBlock";
import ColorCardUI from "../Component/ColorCard";
import ChessCake_Hero from "../Images1/ChessCake_Hero.webp"
import Home61 from "../Images1/Home61.webp"
import Home62 from "../Images1/Home62.webp"
import Home63 from "../Images1/Home63.webp"
import Home64 from "../Images1/Home64.webp"
import Home65 from "../Images1/Home65.webp"
import Home66 from "../Images1/Home66.webp"
import Home67 from "../Images1/Home67.webp"

import Home610 from "../Images1/Home610.webp"
import Home611 from "../Images1/Home611.webp"
import Home612 from "../Images1/Home612.webp"
import Home613 from "../Images1/Home613.webp"





export default function CheeseCake() {
    return (
        <>

            <Header />

            <HeroBlock
                title="The Cheese Cake"
                description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                imageUrl={ChessCake_Hero}
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
                        { Home61 },
                    ].map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl">
                            <a href="#">
                                <img
                                    src={src}
                                    alt=""
                                    className="w-full transition-transform duration-300 hover:scale-105 rounded-lg" draggable="false"
                                />
                            </a>
                        </div>
                    ))}


                    <ColorCardUI />



                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[19px] 
                px-4 sm:px-10 md:px-[60px] lg:px-[100px] xl:px-[140px] 
                py-6 sm:py-10 md:py-[70px] lg:py-[90px] 
                bg-[#ECECEC] rounded-2xl">
                        {[
                            Home67,
                            Home62,
                            Home63,
                            Home64,
                            Home65,
                            Home66,
                        ].map((src, index) => (
                            <div key={index} className="relative overflow-hidden flex justify-center">
                                <div className="overflow-hidden rounded-2xl">
                                    <a href="#">
                                        <img
                                            src={src}
                                            alt=""
                                            className="transition-transform duration-300 hover:scale-105 object-cover 
                       w-full max-w-[241px] h-auto sm:h-[221px]" draggable="false"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-6 sm:py-8 md:py-[32px] px-4 sm:px-10 md:px-[60px] lg:px-[110px] bg-[#ECECEC] rounded-2xl">
                        {[
                            Home610,
                        ].map((src, index) => (
                            <div key={index} className="relative overflow-hidden flex justify-center">
                                <div className="overflow-hidden rounded-2xl">
                                    <a href="#">
                                        <img
                                            src={src}
                                            alt=""
                                            className="transition-transform duration-300 hover:scale-105 object-cover w-full max-w-[803px] h-auto sm:h-[593px]"
                                            draggable="false"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-6 sm:py-8 md:py-[32px] px-4 sm:px-10 md:px-[60px] lg:px-[110px] bg-[#ECECEC] rounded-2xl">
                        {[
                            Home611,
                        ].map((src, index) => (
                            <div key={index} className="relative overflow-hidden flex justify-center">
                                <div className="overflow-hidden rounded-2xl">
                                    <a href="#">
                                        <img
                                            src={src}
                                            alt=""
                                            className="transition-transform duration-300 hover:scale-105 object-cover w-full max-w-[803px] h-auto sm:h-[593px]"
                                            draggable="false"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-6 sm:py-8 md:py-[32px] px-4 sm:px-10 md:px-[60px] lg:px-[110px] bg-[#ECECEC] rounded-2xl">
                        {[
                            Home612,
                        ].map((src, index) => (
                            <div key={index} className="relative overflow-hidden flex justify-center">
                                <div className="overflow-hidden rounded-2xl">
                                    <a href="#">
                                        <img
                                            src={src}
                                            alt=""
                                            className="transition-transform duration-300 hover:scale-105 object-cover w-full max-w-[803px] h-auto sm:h-[593px]"
                                            draggable="false"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-6 sm:py-8 md:py-[32px] px-4 sm:px-10 md:px-[60px] lg:px-[110px] bg-[#ECECEC] rounded-2xl">
                        {[
                            Home613,
                        ].map((src, index) => (
                            <div key={index} className="relative overflow-hidden flex justify-center">
                                <div className="overflow-hidden rounded-2xl">
                                    <a href="#">
                                        <img
                                            src={src}
                                            alt=""
                                            className="transition-transform duration-300 hover:scale-105 object-cover w-full max-w-[803px] h-auto sm:h-[593px]"
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
