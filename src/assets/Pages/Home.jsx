import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import DoubleCarousel from "../Component/DoubleCarousel";
import CompanySlider from "../Component/CompanySlider";
import Service from "../Component/Service";
import TextAnimation from "../Component/TextAnimation";
import Work from "../Component/Work";
import ImageGrid from "../Component/ImageGrid";
import Testimonial from "../Component/Testimonial";
import Cta from "../Component/CTA";
import MotionFadeIn from "../Component/ScrollAnimation";
import heroImage from "../Images1/Hero_section.webp";

import  Onchainisland from "../Images1/Onchainisland.webp"
import  pixbyte from "../Images1/pixbyte.webp"
import  QoneqtH from "../Images1/Qoneqt.webp"
import  unpaid_company from "../Images1/unpaid_company.webp"
import  PackyH from "../Images1/Packy.webp"
import  volcasa2 from "../Images1/volcasa2.webp"
import  chesscake from "../Images1/chesscake.webp"
import  hackerhousegoa from "../Images1/hackerhousegoa.webp"





function Home() {

     const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // Allow DOM to load before scroll
      }
    }
  }, [location]);

    const images = [
        { src:Onchainisland , alt: 'Photo 1', link: "/" },
        { src: pixbyte, alt: 'Photo 2', link: "/pixbytefuturetech" },
        { src: QoneqtH, alt: 'Photo 3', link: "/qonnectmarketing" },
        { src: unpaid_company, alt: 'Photo 4', link: "/theunpaidcompany" },
        { src: PackyH, alt: 'Photo 1',link: "/packy" },
        { src: volcasa2, alt: 'Photo 2', link: "/volcasainternational" },
        { src: chesscake, alt: 'Photo 3', link: "/thecheesecake" },
        { src: hackerhousegoa, alt: 'Photo 4' , link: "/hackerhousegoa" },
    ];

    return (
        <>
        
            <Header />
             <MotionFadeIn animation="slideUpFade" delay={0.5} duration={1}>
            <section className="hero_section flex justify-center align-middle mt-[80px] lg:mt-[150px] md:mt-[120px] 2xl:mt-[180px] mb-[35px] lg:mb-[67px]">
                <div className="container mx-auto">
                    <img src={heroImage} alt="Hero_Section" className="h-[300px] sm:h-[475px] xl:h-[550px] 2xl:h-[787px] w-full object-contain" draggable="false"/>
                </div>
            </section>
            </MotionFadeIn>
            <DoubleCarousel />
            <CompanySlider />
            <TextAnimation />
           
  <Service />
            <Work />
            <ImageGrid images={images} gap="gap-[20px]" />
            <Testimonial />
            <Cta/>

            <Footer />

        </>
    );
}

export default Home;