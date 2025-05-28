import TestimonialCarousel from "./TestimonialCarousel";
import MotionFadeIn from "./ScrollAnimation";

export default function Testimonial() {
    return (
         <MotionFadeIn animation="slideUpFade" delay={0.5} duration={0.5}>
        <section className="Testimonial pb-[50px] md:pb-[100px] 2xl:pb-[200px] z-50 bg-[#fff] relative px-4">
            <div className="container max-w-screen mx-auto px-0 sm:px-6 md:px-8 2xl:px-2">
                <div className="service_heading text-center pb-10 sm:pb-12 md:pb-16">
                    <h3 className="title px-4 py-2 inline-block border border-[#757575] text-[#757575] rounded-xl font-prime text-base sm:text-lg leading-7">
                        Testimonials
                    </h3>
                    <h4 className="subtitle text-3xl sm:text-4xl md:text-5xl font-prime font-bold text-[#171717] mt-4">
                        Weeknd Testimonials
                    </h4>
                    <p className="heading_detail text-[#606060] text-base sm:text-lg font-prime leading-7 mt-4 max-w-3xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <TestimonialCarousel />
            </div>
        </section>
        </MotionFadeIn>
    );
}
