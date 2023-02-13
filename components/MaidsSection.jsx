import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import withAuth from "../auth/withAuth";
import Maids from "../components/Maids";
import maidPhoto from "../public/maidPhoto.png";

const MaidsSection = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const data = {
    id: 1,
    img: maidPhoto,
    name: "Mousumi Zaman",
    job: t("maidJob"),
    location: "Sri Lanka",
    experienceYear: "5",
  };
  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-auto md:space-y-20 sm:space-y-8 space-y-5 md:mb-32 mb-10">
      <div className="text-center xl:mt-36 md:mt-20  mt-10 space-y-5">
        <h1 className="text-[#E48100] font-lato font-bold md:text-5xl text-2xl">
          {t("maid")}
        </h1>
        <p className="md:w-[500px] sm:w-[300px] w-[250px] md:text-sm sm:text-xs text-[10px] mx-auto">
          {t("maidDesc")}
        </p>
      </div>
      <Maids
        data={data}
        viewProfile={t("maidViewProfile")}
        viewProfileColor={"bg-[#E48100]"}
      />
      <div className="w-fit mx-auto">
        <button
          onClick={() =>
            router.push({
              pathname: "/findMaids",
            })
          }
          className="clickButton bg-[#234F7E] md:w-60 sm:w-44 w-28 mx-auto sm:py-3 py-1 md:text-base text-xs rounded-full text-white"
        >
          {t("maidViewAll")}
        </button>
      </div>
    </div>
  );
};

export default withAuth(MaidsSection);
