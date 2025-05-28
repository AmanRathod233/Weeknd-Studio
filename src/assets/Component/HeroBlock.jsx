import React from "react";

const HeroBlock = ({ title, description, imageUrl }) => {
  return (
    <>
      <section className="herosection text-center mt-[100px]  md:mt-[150px] 2xl:mt-[200px] px-4">
        <div className="max-w-[745px] mx-auto">
          <h1 className="font-prime font-[700] text-[35px] md:text-[55px] xl:text-[60px] 2xl:text-[74px] leading-[48px] md:leading-[84px] pb-2 text-[#171717]">
            {title}
          </h1>
          <p className="font-prime text-[16px] md:text-[19px] text-[#171717]">
            {description}
          </p>
        </div>
      </section>

      {imageUrl && (
        <section className="heroimagesection pt-[60px] px-4">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 overflow-hidden rounded-2xl">
              <a href="#">
              <img
                src={imageUrl}
                alt={title}
                draggable="false"
                className="w-full transition-transform duration-300 hover:scale-105 rounded-lg "
              />
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroBlock;
