/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "./Header";
import Image from "next/image";
import withAuth from "../auth/withAuth";

const Banner = ({ imageSrc, imageUlt, text1, text2, text3, textPosition }) => {
  return (
    <div className="relative">
      {/* a blue color on top of the image */}
      <div className="bg-[#005AAA4D]/40 absolute w-full h-full filter contrast-150 brightness-110" />
      {/* Using header with banner to combine the 2 components while loading */}
      <Header />
      <div>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageUlt}
            style={{
              objectFit: "fill",
            }}
            className="w-full select-none"
            priority
          />
        )}
      </div>
      <div
        className={`absolute ${textPosition} md:space-y-3 space-y-0 text-center`}
      >
        <h1 className="text-white xl:text-7xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-lg xxs:text-sm text-xs font-lato font-black">
          {text1}
        </h1>
        <h1 className="text-white lg:text-7xl md:text-5xl sm:text-2xl text-lg font-lato font-black">
          {text2}
        </h1>
        <p className="lg:text-3xl md:text-xl sm:text-sm text-[10px] lg:w-[500px] md:w-[400px] sm:w-[250px] w-[150px] text-white">
          {text3}
        </p>
      </div>
    </div>
  );
};

export default withAuth(Banner);
