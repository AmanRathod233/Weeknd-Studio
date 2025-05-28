import Footer from "../Component/Footer";
import Header from "../Component/Header";
import EventDesign from "../Component/EventDesign";
import HeroBlock from "../Component/HeroBlock";
import UnpaidCompany from "../Images1/UnpaidCompany.webp"
import UnpaidCompany1 from "../Images1/The_Unpaid_Company.webp"
import UnpaidCompany2 from "../Images1/Home41.webp"
import UnpaidCompany3 from "../Images1/Home42.webp"
import UnpaidCompany4 from "../Images1/Home410.webp"
import UnpaidCompany5 from "../Images1/Home49.webp"
import UnpaidCompany6 from "../Images1/MacBook.webp"
import UnpaidCompany7 from "../Images1/Home46.webp"
import UnpaidCompany8 from "../Images1/Home47.webp"
import UnpaidCompany9 from "../Images1/Home48.webp"



export default function TheUnpaidCompany() {
    return (
        <>
        
            <Header />

            <HeroBlock
                title="The Unpaid Company"
                description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                imageUrl={UnpaidCompany}
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
                       UnpaidCompany1,
                       UnpaidCompany2,
                        UnpaidCompany3,

                    ].map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                            <a href="#">
                                <img src={src} alt="" className="transition-transform duration-300 hover:scale-105 w-full" draggable="false" />
                            </a>
                        </div>
                    ))}

                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-10 lg:px-20 pt-10 sm:pt-12 md:pt-16 relative z-10 bg-white">
                <div className="grid grid-cols-1  md:grid-cols-3 gap-6 w-full max-w-[1030px] mx-auto bg-[#EFF6F6] p-6 sm:p-8 md:p-10 lg:p-[42px] rounded-lg justify-center">
                    {[
                       UnpaidCompany4,
                       UnpaidCompany5,
                     UnpaidCompany6,
                    ].map((src, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-lg bg-white lg:w-[292px]  lg:h-[292px] mx-auto"
                        >
                            <a href="#">
                                <img
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    draggable="false"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </section>




            <section className="px-4 pt-[60px]  relative z-10 bg-white">
                <div className="max-w-[1030px] mx-auto space-y-12">
                    {[
                        UnpaidCompany7,
                      UnpaidCompany8,
                       UnpaidCompany9,
                    ].map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl">
                            <a href="#">
                                <img src={src} alt="" className="transition-transform duration-300 hover:scale-105 w-full" draggable="false" />
                            </a>
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