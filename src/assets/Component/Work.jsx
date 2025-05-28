
import WorkMarquee from './WorkMarquee';
import MotionFadeIn from './ScrollAnimation';
import Work1 from "../Images1/Work1.svg"
import Work2 from "../Images1/Work2.svg"
import Work3 from "../Images1/Work3.svg"
import Work4 from "../Images1/Work4.svg"
import Work5 from "../Images1/Work5.svg"
import Work6 from "../Images1/Work6.svg"
import Work7 from "../Images1/Work7.svg"
import Work8 from "../Images1/Work8.svg"
import Work9 from "../Images1/Work9.svg"


export default function Work() {
    const slides = [
         Work1 ,
         Work2 ,
         Work3 ,
         Work4 ,
         Work5 ,
         Work6 ,
         Work7 ,
         Work8 ,
         Work9 ,
         Work7 ,
         Work8 ,
         Work9 ,
        
    ];
    return (
        <>
            <MotionFadeIn animation="slideUpFade" delay={0.5} duration={0.8}>
                <section className="work pb-[100px] md:pb-[140px] 2xl:pb-[200px] px-4 scroll-mt-[170px]" id="Portfolio">
                    <div className="container max-w-[1240px] mx-auto">
                        <div className="service_heading text-center pb-10 sm:pb-12 md:pb-16">
                            <h3 className="title px-4 py-2 inline-block border border-[#757575] text-[#757575] rounded-xl font-prime text-base sm:text-lg leading-7">
                                We Deliver
                            </h3>
                            <h4 className="subtitle text-3xl sm:text-4xl md:text-5xl font-prime font-bold text-[#171717] mt-4">
                                Weeknd Works
                            </h4>
                            <p className="heading_detail text-[#606060] text-base sm:text-lg font-prime leading-7 mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>


                        <WorkMarquee slides={slides}
                            cardWidth='w-full'
                            cardHeight='h-[55px] sm:h-[55px]'
                            side='left' />


                        <WorkMarquee slides={slides}
                            cardWidth='w-full'
                            cardHeight='h-[55px] sm:h-[55px]'
                            side='' />
                    </div>
                </section >
            </MotionFadeIn>
        </>
    );
}