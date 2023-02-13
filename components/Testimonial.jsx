import Image from "next/image";
import React from "react";
import clientPhoto from "../public/clientPhoto.png";
import { useTranslation } from "react-i18next";
import withAuth from "../auth/withAuth";
// TODO: update the testimonials with the real one
const Testimonial = () => {
  const { t, i18n } = useTranslation();
  const data = {
    img: clientPhoto,
    name: "Alice Brown",
    rate: 4,
    contentHeader: "“Awesome Service”",
    description:
      "At simul malorum has, tibique moderatius scribentur duo eu. Enim libris pri ad, tantas ridens perpetua ne vim. Eam molestie voluptatum et, commodo suavitate eam ut. An habeo homero graeco vis.",
  };
  const arr = Array.apply(null, Array(3)).map(function (x, i) {
    return i;
  });
  const rate = Array.apply(null, Array(5)).map(function (x, i) {
    return i;
  });
  return (
    <div className="mb-20 md:mb-0 lg:max-w-6xl md:max-w-4xl max-w-sm mx-auto">
      <div className="text-center mt-20 space-y-5">
        <h1 className="text-[#E48100] font-lato font-bold md:text-4xl sm:text-3xl text-xl">
          {t("testimonials")}
        </h1>
        <p className="md:w-[500px] sm:w-[300px] w-[200px] sm:text-base text-sm mx-auto">
          {t("testimonialsDesc")}
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 md:mt-10 mt-5">
        {arr.map((item) => (
          <div
            key={item}
            className="bg-[#234F7E] flex flex-col space-y-3 p-5 lg:w-80 md:w-56 w-44 mx-auto"
          >
            <div className="flex items-center space-x-5 lg:w-20 md:w-14 w-12">
              <Image
                src={data.img}
                alt="Client Photo"
                className="rounded-full"
                width={82}
                height={82}
              />
              <div className="flex flex-col space-y-2 md:col-span-2">
                {/* Name */}
                <h1 className="text-white lg:text-2xl md:text-lg text-sm">
                  {data.name}
                </h1>
                {/* Rate */}
                <div className="flex items-center" title={data.rate}>
                  {/* Catching the rate from data and loop on them */}
                  {rate.map((item) => {
                    if (item < data.rate) {
                      return (
                        // Star
                        <svg
                          key={item}
                          aria-hidden="true"
                          className="md:w-5 md:h-5 w-2 h-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      );
                    } else {
                      return (
                        // Not star
                        <svg
                          key={item}
                          aria-hidden="true"
                          className="md:w-5 md:h-5 w-2 h-2 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {/* Content header */}
            <h1 className="text-white lg:text-2xl md:text-lg text-xs text-left">
              {data.contentHeader}
            </h1>
            {/* Description */}
            <p className="text-white lg:text-base md:text-sm text-xs">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuth(Testimonial);
