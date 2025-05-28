import MotionFadeIn from "./ScrollAnimation";
import { Link } from "react-router-dom";

export default function ImageGrid({ images, gap }) {
  return (
    <section className="image_section pb-[60px] sm:pb-[80px] md:pb-[140px] 2xl:pb-[200px] px-4" >

        <div className="container max-w-[100%]  lg:max-w-[1240px] mx-auto">

          <div className={`grid grid-cols-1 sm:grid-cols-2 ${gap} overflow-hidden`}>
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl">
                <a href={image.link} target="_blank"
                >
                <MotionFadeIn animation="fade" delay={0.5} duration={0.8}>
                  <img
                    src={image.src}
                    alt={image.alt || `image-${index}`}
                    draggable="false"
                    className="w-full h-[240px] sm:h-[444px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 object-center"
                  />
            </MotionFadeIn>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
