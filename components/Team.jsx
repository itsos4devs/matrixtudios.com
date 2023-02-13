import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import withAuth from "../auth/withAuth";
import teamPhoto1 from "../public/teamPhoto1.jpeg";
import teamPhoto2 from "../public/teamPhoto2.jpeg";
import teamPhoto3 from "../public/teamPhoto3.jpeg";
import teamPhoto4 from "../public/teamPhoto4.jpeg";
import teamPhoto5 from "../public/teamPhoto5.jpeg";
import teamPhoto6 from "../public/teamPhoto6.jpeg";
import teamPhoto7 from "../public/teamPhoto7.jpeg";
// TODO: update photos with team
const Team = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-full md:mb-44 lg:max-w-6xl md:max-w-4xl max-w-sm mx-auto md:space-y-20 space-y-10 mb-10">
      <div className="text-center xl:mt-32 md:mt-20 mt-10 md:space-y-5 space-y-2">
        <h1 className="text-[#E48100] font-lato font-bold md:text-4xl md:w-[600px] mx-auto text-xl">
          {t("teamTitle")}
        </h1>
        <p className="md:w-[400px] sm:w-[300px] w-[250px] md:text-sm sm:text-xs text-[8px] mx-auto">
          Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
          nostrud oratio aperiri legimus eu.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-y-16 gap-y-5 xl:gap-x-20 lg:gap-x-10 md:gap-x-2 xs:gap-x-5 gap-x-2 text-center mx-auto w-max">
        <div className="lg:w-[300px] md:w-[250px] w-[150px] bg-[#DBE9F8] lg:h-[350px] md:h-[300px] h-[200px] md:space-y-2 space-y-1 rounded-lg">
          <div className="w-max mx-auto mt-3">
            <div className="md:w-44 md:h-44 w-16 h-16">
              <Image
                src={teamPhoto1}
                alt="Developer photo"
                className="rounded-full mx-auto border-2 border-[#234F7E]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="md:text-2xl text-sm font-lato text-[#234F7E] font-bold">
              {i18n.language === "ar" ? "لاروس" : "Rose"}
            </h2>
            <h3 className="md:text-lg text-xs font-lato font-bold">
              {i18n.language === "ar"
                ? "سكرتير اندونيسيا"
                : " Indonesia Secertary"}
            </h3>
            <h2 className="text-[#E48100] md:text-base text-xs">
              +971 544664003
            </h2>
          </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] w-[150px] bg-[#DBE9F8] lg:h-[350px] md:h-[300px] h-[200px] md:space-y-2 space-y-1 rounded-lg">
          <div className="w-max mx-auto mt-3">
            <div className="md:w-44 md:h-44 w-16 h-16">
              <Image
                src={teamPhoto2}
                alt="Developer photo"
                className="rounded-full mx-auto border-2 border-[#234F7E]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="md:text-2xl text-sm font-lato text-[#234F7E] font-bold">
              {i18n.language === "ar" ? "محمد نعيم" : "Naeem"}
            </h2>
            <h3 className="md:text-lg text-xs font-lato font-bold">
              {i18n.language === "ar" ? "محاسب" : "Accountant"}
            </h3>
            <h2 className="text-[#E48100] md:text-base text-xs">
              +971 567878408
            </h2>
          </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] w-[150px] bg-[#DBE9F8] lg:h-[350px] md:h-[300px] h-[200px] md:space-y-2 space-y-1 rounded-lg">
          <div className="w-max mx-auto mt-3">
            <div className="md:w-44 md:h-44 w-16 h-16">
              <Image
                src={teamPhoto3}
                alt="Developer photo"
                className="rounded-full mx-auto border-2 border-[#234F7E]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="md:text-2xl text-sm font-lato text-[#234F7E] font-bold">
              {i18n.language === "ar" ? "ريفاواتي اسحاق " : "Rifa"}
            </h2>
            <h3 className="md:text-lg text-xs font-lato font-bold">
              {i18n.language === "ar"
                ? "سكرتير اندونيسيا"
                : " Indonesia Secertary"}
            </h3>
            <h2 className="text-[#E48100] md:text-base text-xs">
              +971 522860554
            </h2>
          </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] w-[150px] bg-[#DBE9F8] lg:h-[350px] md:h-[300px] h-[200px] md:space-y-2 space-y-1 rounded-lg">
          <div className="w-max mx-auto mt-3">
            <div className="md:w-44 md:h-44 w-16 h-16">
              <Image
                src={teamPhoto4}
                alt="Developer photo"
                className="rounded-full mx-auto border-2 border-[#234F7E]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="md:text-2xl text-sm font-lato text-[#234F7E] font-bold">
              {i18n.language === "ar" ? "فريدة نالووج" : "Farida Naloog"}
            </h2>
            <h3 className="md:text-lg text-xs font-lato font-bold">
              {i18n.language === "ar" ? "سكرتير اوغندا" : " Uganda Secertary"}
            </h3>
            <h2 className="text-[#E48100] md:text-base text-xs">
              +971 544664007
            </h2>
          </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] w-[150px] bg-[#DBE9F8] lg:h-[350px] md:h-[300px] h-[200px] md:space-y-2 space-y-1 rounded-lg">
          <div className="w-max mx-auto mt-3">
            <div className="md:w-44 md:h-44 w-16 h-16">
              <Image
                src={teamPhoto5}
                alt="Developer photo"
                className="rounded-full mx-auto border-2 border-[#234F7E]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="md:text-2xl text-sm font-lato text-[#234F7E] font-bold">
              {i18n.language === "ar" ? "خليفتول حسناه" : "Sanna"}
            </h2>
            <h3 className="md:text-lg text-xs font-lato font-bold">
              {i18n.language === "ar"
                ? "سكرتير اندونيسيا"
                : " Indonesia Secertary"}
            </h3>
            <h2 className="text-[#E48100] md:text-base text-xs">
              +971 549929926
            </h2>
          </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] w-[150px] bg-[#DBE9F8] lg:h-[350px] md:h-[300px] h-[200px] md:space-y-2 space-y-1 rounded-lg">
          <div className="w-max mx-auto mt-3">
            <div className="md:w-44 md:h-44 w-16 h-16">
              <Image
                src={teamPhoto6}
                alt="Developer photo"
                className="rounded-full mx-auto border-2 border-[#234F7E]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="md:text-2xl text-sm font-lato text-[#234F7E] font-bold">
              {i18n.language === "ar" ? "ايم دارشكا" : "Iyomi"}
            </h2>
            <h3 className="md:text-lg text-xs font-lato font-bold">
              {i18n.language === "ar"
                ? "سكرتير سيرلانكا"
                : " Sir Lanka Secertary"}
            </h3>
            <h2 className="text-[#E48100] md:text-base text-xs">
              +971 54466002
            </h2>
          </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] w-[150px] bg-[#DBE9F8] lg:h-[350px] md:h-[300px] h-[200px] md:space-y-2 space-y-1 rounded-lg">
          <div className="w-max mx-auto mt-3">
            <div className="md:w-44 md:h-44 w-16 h-16">
              <Image
                src={teamPhoto7}
                alt="Developer photo"
                className="rounded-full mx-auto border-2 border-[#234F7E]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="md:text-2xl text-sm font-lato text-[#234F7E] font-bold">
              {i18n.language === "ar" ? "خودزنه" : "Sari"}
            </h2>
            <h3 className="md:text-lg text-xs font-lato font-bold">
              {i18n.language === "ar"
                ? "سكرتير اندونيسيا"
                : " Indonesia Secertary"}
            </h3>
            <h2 className="text-[#E48100] md:text-base text-xs">
              +971 544664001
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Team);
