import React from 'react';

const EventDesign = ({ title, content, paddingY}) => {
  return (
    <section className={`event_section ${paddingY} px-4 z-10`}>
      <div className="w-full max-w-6xl service_box border border-[#DFDFDF] lg:p-[50px] p-[35px] rounded-[20px] bg-white m-auto">
        <div className="grid grid-cols-1 md:grid-cols-[38%_62%] sm:gap-[15px] md:gap-[8px] gap-[31px] items-start">
          <div className="service_text">
            <h3 className="service_heading font-prime font-[700] tracking-[0.7px] text-[24px] md:text-[30px] leading-[36px] md:leading-[42px] text-[#171717]">
              {title}
            </h3>
          </div>
          <div className="service_content pt-[6px] font-prime text-[#606060] text-[16px] md:text-[18px] leading-[26px]">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDesign;
