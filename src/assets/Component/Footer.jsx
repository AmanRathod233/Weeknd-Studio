import { useEffect, useRef, useState } from "react";
import Happy_Weeknd from "../Images1/Happy_Weeknd.svg";

function Footer() {
  const footerRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the footer is visible (0 to 1)
      const visibleRatio = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / rect.height)
      );

      // Convert visibleRatio to translateY (-50% to 0%)
      const offset = (1 - visibleRatio) * -50;

      setTranslateY(offset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerStyle = {
    transform: `translateY(${translateY}%) translate3d(0, 0, 0)`,
    translate: "none",
    rotate: "none",
    scale: "none",
  };

  return (
    <>
      <footer
        ref={footerRef}
        className="bg-primary font-prime md:grid-cols-2 pt-[120px] md:pt-[150px] lg:pt-[174px] min-h-[50vh] relative z-0 -mt-[87px]"
        style={footerStyle}>
        <div className="px-6 lg:px-15 xl:px-20 grid grid-cols-1 sm:grid-cols-2 items-start justify-between footer_text gap-[15px]">
          <p className="text-white text-lg md:text-[18px] 2xl:text-2xl leading-[1.6]">
            We don’t just design—we lock into your vibe from
            <br className="hidden xl:inline" />
            day one, deliver what you had in mind (or better),
            <br className="hidden xl:inline" />
            and turn clients into long-term friends. That’s why
            <br className="hidden xl:inline" />
            most people come for one project… and end up
            <br className="hidden xl:inline" />
            calling us their Family Designer™.
          </p>

          <div className="footer_right">
            <div className="social_media_icon flex justify-center md:justify-end gap-4 mb-6 md:mb-4">
              {[
                {
                  icon: "instagram",
                  link: "https://www.instagram.com/weeknd__studio/",
                },
                {
                  icon: "linkedin",
                  link: "http://linkedin.com/company/weeknd-studio",
                },
                {
                  icon: "x-twitter",
                  link: "https://x.com/Weeknd_studio",
                },
              ].map(({ icon, link }, index) => (
                <div
                  key={index}
                  className="bg-white/15 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] flex items-center justify-center text-white text-lg sm:text-xl rounded-full transition duration-300 hover:bg-white/25"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands fa-${icon}`} aria-hidden="true"></i>
                  </a>
                </div>
              ))}
            </div>

            <div className="email_id text-center md:text-end">
              <a
                href="mailto:contact@weeknd.studio"
                className="text-lg sm:text-[18px] 2xl:text-2xl text-white leading-8 sm:leading-9 cursor-pointer"
              >
                contact@weeknd.studio
              </a>
            </div>
          </div>
        </div>

        <div className="pt-[30px] md:pt-[80px] lg:pt-[140px] px-[20px] md:px-[28px] pb-[30px] md:pb-[77px]">
          <img
            src={Happy_Weeknd}
            className="w-full max-w-full h-auto"
            alt="Decorative Graphic"
            draggable="false"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
