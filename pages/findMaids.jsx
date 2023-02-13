/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Banner from "../components/Banner";
import Maids from "../components/Maids";
import findMaid from "../public/findMaids.jpeg";
import maidPhoto from "../public/maidPhoto.png";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchMaids from "../components/SearchMaids";
import withAuth from "../auth/withAuth";

const findMaids = () => {
  const { t } = useTranslation();

  const data = {
    id: 1,
    img: maidPhoto,
    name: "Mousumi Zaman",
    job: t("maidJob"),
    location: "Sri Lanka",
    experienceYear: "5",
  };
  return (
    <div>
      <Head>
        <title>Find Maids / Tadbeer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Banner
        imageSrc={findMaid}
        imageUlt="find Maids banner"
        text1={t("findMaid")}
        textPosition={
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      />
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto md:space-y-20 sm:space-y-8 space-y-5 md:mb-44 mb-16">
        <div className="text-center xl:mt-36 md:mt-20 mt-10 space-y-2">
          <h1 className="text-[#E48100] font-lato font-bold lg:text-5xl md:text-3xl text-xl">
            {t("findMaidTitle")}
          </h1>
          <p className="md:w-[500px] sm:w-[300px] w-[250px] md:text-sm sm:text-xs text-[10px] mx-auto">
            Lorem ipsum dolor sit amet, ut sed velit euismod vulputate, cum
            nostrud oratio aperiri legimus eu.
          </p>
        </div>
        <SearchMaids />
        <Maids
          data={data}
          viewProfile={t("maidViewProfile")}
          viewProfileColor={"bg-[#E48100]"}
        />
        <div className="w-fit mx-auto">
          <button className="clickButton bg-[#234F7E] md:w-60 sm:w-44 w-28 mx-auto sm:py-3 py-1 md:text-base text-xs rounded-full text-white">
            {t("NextPage")}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(findMaids);