import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../public/logo.png";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";
import withAuth from "../auth/withAuth.js";
import { useUser } from "../auth/useUser.js";
import Signin from "../components/Signin";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef(null);
  useOnClickOutside(dropDownRef, () => setDropDown(false));
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { user, logout } = useUser();
  return (
    <div className="bg-[#000]/50 md:h-[71px] h-[20px] absolute left-0 right-0">
      <div className="flex justify-between items-center xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[750px] sm:max-w-[400px] max-w-[300px] m-auto h-full">
        {/* Logo */}
        <div className="lg:w-32 lg:h-10 md:w-28 md:h-8 sm:w-12 w-10">
          <Image
            src={logo}
            alt="LOGO"
            width={151}
            height={40}
            className="rounded-lg cursor-pointer select-none"
            onClick={() =>
              router.push({
                pathname: "/",
              })
            }
            priority
          />
        </div>
        {/* Pages */}
        <div className="flex xl:space-x-12 lg:space-x-6 md:space-x-3 space-x-2">
          <h1
            className="text-white lg:text-base md:text-xs sm:text-[10px] text-[5px] cursor-pointer select-none"
            onClick={() =>
              router.push({
                pathname: i18n.language === "ar" ? "/contactUs" : "/",
              })
            }
          >
            {i18n.language === "ar" ? t("contact") : t("home")}
          </h1>
          <h1
            onClick={() =>
              router.push({
                pathname: i18n.language === "ar" ? "/ourServices" : "/aboutUs",
              })
            }
            className="text-white lg:text-base md:text-xs sm:text-[10px] text-[5px] cursor-pointer select-none"
          >
            {i18n.language === "ar" ? t("services") : t("about")}
          </h1>
          <h1
            onClick={() =>
              router.push({
                pathname: "/ourTeam",
              })
            }
            className="text-white lg:text-base md:text-xs sm:text-[10px] text-[5px] cursor-pointer select-none"
          >
            {t("team")}
          </h1>
          <h1
            onClick={() =>
              router.push({
                pathname: i18n.language === "ar" ? "/aboutUs" : "/ourServices",
              })
            }
            className="text-white lg:text-base md:text-xs sm:text-[10px] text-[5px] cursor-pointer select-none"
          >
            {i18n.language === "ar" ? t("about") : t("services")}
          </h1>
          <h1
            onClick={() =>
              router.push({
                pathname: i18n.language === "ar" ? "/" : "/contactUs",
              })
            }
            className="text-white lg:text-base md:text-xs sm:text-[10px] text-[5px] cursor-pointer select-none"
          >
            {i18n.language === "ar" ? t("home") : t("contact")}
          </h1>
        </div>
        {/* right side */}
        <div className="flex items-center lg:space-x-5 md:space-x-2 space-x-1 relative">
          {/* Language change */}
          <div className="flex space-x-1 md:space-x-2">
            <h1
              className={
                i18n.language === "en"
                  ? "text-[5px] lg:text-base md:text-sm cursor-pointer text-yellow-500"
                  : "text-white text-[5px] lg:text-base md:text-sm cursor-pointer hover:text-yellow-500"
              }
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </h1>
            <h1 className="text-white text-[5px] lg:text-base md:text-sm">|</h1>
            <h1
              className={
                i18n.language === "ar"
                  ? "text-[5px] lg:text-base md:text-sm cursor-pointer text-yellow-500"
                  : "text-white text-[5px] lg:text-base md:text-sm cursor-pointer hover:text-yellow-500"
              }
              onClick={() => i18n.changeLanguage("ar")}
            >
              AR
            </h1>
          </div>
          {/* User handler */}
          <div className="relative" ref={dropDownRef}>
            {user?.email ? (
              <div
                className="w-4 h-4 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-500 relative rounded-full select-none cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              >
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-xl text-[8px] font-lato font-bold uppercase">
                  {user.email[0]}
                </h1>
              </div>
            ) : (
              <div className="md:w-24 sm:w-16 w-8 flex items-center justify-center">
                <button
                  className="clickButton bg-gray-500 md:w-20 sm:w-16 w-8 mx-auto md:py-1 py-0.5 md:text-base text-[5px] rounded-full text-white"
                  onClick={() => setDropDown(!dropDown)}
                >
                  {t("signIn")}
                </button>
              </div>
            )}
            {/* DropDown */}
            {user?.email ? (
              <div
                className={
                  dropDown
                    ? "z-10 absolute md:top-14 top-5 right-0 md:w-44 w-24 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    : "hidden"
                }
              >
                {/* Email and name */}
                <div className="md:py-3 md:px-4 py-2 px-2 md:text-sm text-[8px] text-gray-900 dark:text-white">
                  <div>
                    <h1 className="font-medium truncate">{user.email}</h1>
                  </div>
                  {/* <div className="font-medium truncate">name@flowbite.com</div> */}
                </div>
                {/* categories */}
                <ul
                  className="md:py-1 py-0 md:text-sm text-[8px] text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li>
                    <Link
                      href="/favourites"
                      className="block md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {t("favourite")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/upcomingInterviews"
                      className="block md:py-2 md:px-4 py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {t("upcoming")}
                    </Link>
                  </li>
                </ul>
                {/* Sign out */}
                <div className="md:py-1 py-0">
                  <button
                    onClick={() => logout()}
                    className="block md:py-2 md:px-4 py-1 w-full px-2 md:text-sm text-[8px] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {t("signOut")}
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={
                  dropDown
                    ? "z-10 absolute right-0 md:top-14 top-5 md:w-72 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    : "hidden"
                }
              >
                <Signin />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Header);

{
  /* Language Dropdown */
}
{
  /* <div>
            <div
              className="flex items-center hover:cursor-pointer space-x-1 select-none relative"
              onClick={() => setDropDown(!dropDown)}
              ref={dropDownRef}
            >
              <h1 className="text-white md:text-base sm:text-[10px] text-[7px]">
                {i18n.language.toUpperCase()}
              </h1>
              <ChevronDownIcon className="md:h-4 md:w-4 h-2 w-2 text-white" />
              <div
                className={
                  dropDown
                    ? "z-10 absolute top-7 w-fit bg-white rounded divide-y divide-gray-100 shadow"
                    : "hidden"
                }
              >
                <ul className="text-sm text-gray-700">
                  <li
                    onClick={() =>
                      i18n.language === "ar"
                        ? i18n.changeLanguage("en")
                        : i18n.changeLanguage("ar")
                    }
                  >
                    <a className="font-semibold block md:py-2 md:px-4 py-0.5 px-2 cursor-pointer select-none md:text-base text-[10px]">
                      {i18n.language === "ar" ? "EN" : "AR"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */
}
