import React from "react";
import CakePic from "../Images1/CakePIc.png"

const ColorCardUI = () => {
  const cakeIcons = [
    { bg: "#E25D5D", rounded: "rounded-full", icon: CakePic },
    { bg: "#F5A623", rounded: "rounded-full", icon: CakePic },
    { bg: "#F5A623", rounded: "rounded-md", icon:   CakePic },
    { bg: "#E25D5D", rounded: "rounded-md", icon:   CakePic },
  ];

  const colorBars = [
    { bg: "#111111", rounded: "rounded-tl-[30px]" },
    { bg: "#A7D3F4", rounded: "rounded-tl-[30px]" },
    { bg: "#FAD9FC", rounded: "rounded-tl-[30px]" },
    { bg: "#EB6A5D", rounded: "rounded-tl-[30px]" },
    { bg: "#0CFFB3", rounded: "rounded-tl-[30px]" },
    { bg: "#FFB400", rounded: "rounded-tl-[30px]" },
  ];

  return (
    <div className="flex flex-col items-center bg-[#ECECEC] px-4 pt-10 sm:pt-20 rounded-lg">
      
      {/* Cake Icons */}
      <div className="flex flex-wrap justify-center gap-[30px] sm:gap-[50px] mb-12">
        {cakeIcons.map(({ bg, rounded, icon }, index) => (
          <div
            key={index}
            className={`w-[120px] h-[120px] sm:w-[154px] sm:h-[154px] ${rounded} shadow-lg flex items-center justify-center`}
            style={{ backgroundColor: bg }}
          >
            <img
              src={icon}
              alt={`Cake ${index + 1}`}
              draggable="false"
              className="w-[60px] h-[50px] sm:w-[91px] sm:h-[75px] transition-transform duration-300 hover:scale-105 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Color Bars */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[5px] w-full">
        {colorBars.map(({ bg, rounded }, index) => (
          <div
            key={index}
            className={`w-full h-[200px] sm:h-[300px] lg:h-[365px] ${rounded}`}
            style={{ backgroundColor: bg }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorCardUI;
