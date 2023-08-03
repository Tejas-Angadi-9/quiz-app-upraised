import React from "react";
import range from "../images/third.png";
import firstCircle from "../images/first.png";
import secondCircle from "../images/second.png";

const SemiCircle = ({ finalScore }) => {
  return (
    <div className="relative">
      <img src={range} alt="" className="z-50" loading="lazy" />

      <img
        src={secondCircle}
        alt=""
        className="absolute top-0 left-[8px] mt-1"
        width={"135px"}
        loading="lazy"
      />
      <img
        src={firstCircle}
        alt=""
        className="absolute w-[100px] top-6 left-[25px] border-none border-slate-100 rounded-full z-30"
        loading="lazy"
      />

      <div className="w-[80px] h-[80px] bg-transparent border-[1px] rounded-full absolute top-9 left-9">
        <div className="absolute text-[28px] border-[1px] rounded-full font-bold text-center flex items-center justify-center mx-auto w-[90px] h-[90px] ml-[-6.4px] mt-[-9.0px]  z-[90]">
          {finalScore}%
        </div>
      </div>
    </div>
  );
};

export default SemiCircle;
