import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import testimonial1 from "../Images1/testimonial1.webp"
import testimonial2 from "../Images1/testimonial2.webp"
import Play_Button from "../Images1/Play_Button.SVG"


export default function TestimonialCarousel() {
  const testimonials = [
    {
      image: testimonial1,
      name: "Prayasu Satapathy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: testimonial2,
      name: "Saurabh JR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: testimonial1,
      name: "Prayasu Satapathy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: testimonial2,
      name: "Saurabh JR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: testimonial1,
      name: "Saurabh JR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: testimonial2,
      name: "Saurabh JR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-0">
      <div className="ml-0 2xl:ml-[100px]">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-[20px] border border-[#DFDFDF] overflow-hidden">
                <div className="relative overflow-hidden">
                  <a href="#">
                    <img
                      src={t.image}
                      alt={t.name}
                      draggable="false"
                      className="w-full h-full object-cover object-top"
                    />
                  </a>
                  
                  
                  <div className="absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-[#ECECEC] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-white">
                  <a href="#">
                    <img src={Play_Button} alt=""   draggable="false" />
                    </a>
                  </div>
                </div>
                <div className="p-[25px] text-left">
                  <h3 className="font-prime font-bold text-black text-[20px] md:text-[24px] lg:text-[26px] pb-[10px]">
                    {t.name}
                  </h3>
                  <p className="text-[16px] font-prime text-[#606060]">
                    {t.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );

}
