import MotionFadeIn from "./ScrollAnimation";

export default function Cta() {
    return (
        <>

            <section className="cta rounded-bl-[30px] md:rounded-bl-[40px] lg:rounded-bl-[60px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[60px] shadow-xl bg-white z-50 relative pb-[50px]">
                <div className="container max-w-[1030px] mx-auto">
                    <div className="cta_heading text-center sm:mb-[30px] md:mb-[50px] ">
                        <h3 className="title px-4 py-2 inline-block border border-[#757575] text-[#171717] rounded-xl font-prime text-base sm:text-lg leading-7">
                            Let’s Work Together
                        </h3>
                        <h4 className="subtitle text-3xl sm:text-4xl md:text-5xl font-prime font-bold text-[#171717] mt-4">
                            Are You Ready?
                        </h4>
                        <p className="heading_detail text-[#606060] text-sm sm:text-base md:text-lg font-prime leading-6 sm:leading-7 mt-4 max-w-3xl mx-auto px-4 sm:px-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <span className="hidden md:inline"><br /></span>
                            Lorem Ipsum has been the industry's standard dummy
                        </p>
                        <button className="bg-[#FF4202] text-white px-[30px] py-[14px] rounded-full font-prime1 text-[18px] hover:bg-[#171717] transition-colors duration-300 mt-[6px] cursor-pointer">
                            Book A Call
                        </button>
                    </div>
                </div>
            </section>

        </>
    );
}
