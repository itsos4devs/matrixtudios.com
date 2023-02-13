import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import withAuth from "../auth/withAuth";

const Maids = ({
  data,
  viewProfile,
  up,
  live,
  history,
  viewProfileColor,
  upColor,
  historyColor,
  liveColor,
}) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const arr = Array.apply(null, Array(15)).map(function (x, i) {
    return i;
  });

  return (
    <div className="grid lg:grid-cols-5 grid-cols-3 xl:gap-x-10 lg:gap-x-2 md:gap-y-28 gap-y-10">
      {arr.map((item) => (
        <div key={item} className="flex flex-col items-center space-y-1 group">
          {/* Image */}
          <div className="md:h-28 md:w-28 sm:h-16 sm:w-16 h-10 w-10">
            <Image
              src={data.img}
              alt="Maid Photo"
              className={`rounded-full group-hover:border-2 group-hover:border-yellow-500`}
              width={117}
              height={117}
            />
          </div>
          {/* Name */}
          <h1 className="md:text-lg sm:text-sm text-xs font-semibold">
            {data.name}
          </h1>
          {/* Job */}
          <h1 className="md:text-base sm:text-sm text-xs font-semibold">
            {data.job}
          </h1>
          {/* Location */}
          <h1 className="md:text-sm text-xs">{data.location}</h1>
          {/* Experience Years */}
          <h1 className="md:text-sm text-xs">{data.experienceYear} Years</h1>
          <button
            onClick={() => {
              router.push({
                pathname: `/profile/[pid]`,
                query: { pid: data.id },
              });
            }}
            className={`clickButton ${
              viewProfileColor ||
              (item < 7 ? upColor : item > 7 ? historyColor : liveColor)
            } md:px-3 px-2 py-0.5 md:text-base sm:text-xs text-[7px] text-white rounded-md`}
          >
            {viewProfile || (item < 7 ? up : item > 7 ? history : live)}
          </button>
        </div>
      ))}
    </div>
  );
};

export default withAuth(Maids);
