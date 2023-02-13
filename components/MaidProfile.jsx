import Image from "next/image";
import React from "react";
import maidProfile from "../public/maidProfile.jpeg";
import thumbnail from "../public/video.png";
import play from "../public/playButton.png";
import Footer from "./Footer";
import { useUser } from "../auth/useUser";
import withAuth from "../auth/withAuth";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

const MaidProfile = ({ ProfilePhotoSrc }) => {
  const fakeMaidData = [
    {
      id: "543416464DSAdas54",
      maidPhoto: maidProfile,
      name: "Mousumi Zaman",
      description:
        "Registered On: 08/06/2022 | Application No: 0000 | Nationality: Indonesia | Age: 25 | Date Of Birth: 19/09/1997 | Number Of Kids: 1 | Martial Status: Married | Religion: Muslim",
    },
  ];
  const { user, logout } = useUser();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call backend to create a checkout session...
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      maid: fakeMaidData,
      email: user.email,
    });

    // redirect user to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };
  return (
    <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-[700px] xs:max-w-sm xxs:max-w-[340px] max-w-[300px] mx-auto md:mt-20 mt-10">
      <div className="grid grid-cols-3 space-x-5">
        {/* First div */}
        <div className="flex flex-col lg:justify-center justify-start items-start lg:space-y-12 md:space-y-8 xs:space-y-5 space-y-2">
          {/* photo */}
          <div className="w-12 xxs:w-16 xs:w-20 md:w-32 lg:w-44 xl:w-52">
            <Image
              src={maidProfile}
              alt="Profile Photo"
              width={280}
              height={417}
              className="rounded-xl"
            />
          </div>
          <div className="lg:space-y-12 md:space-y-6 xs:space-y-3 space-y-1">
            {/* Name */}
            <h1 className="lg:text-3xl md:text-xl xs:text-xs text-[10px] font-lato font-bold">
              Mousumi Zaman
            </h1>
            {/* Data */}
            <div className="flex md:space-x-5 xs:space-x-3 space-x-1">
              <div className="md:space-y-2 space-y-1">
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Registered on:
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Application No:
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Nationality:
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Age:
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Date of Birth:
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Number of kids:
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Martial Status:
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Religion:
                </h3>
              </div>
              <div className="md:space-y-2 space-y-1">
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  08/06/2022
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  0000
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Indonesia
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  25 Years
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  19/09/1997
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  1
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Married
                </h3>
                <h3 className="font-lato lg:text-base md:text-sm xs:text-[8px] text-[5px]">
                  Muslim
                </h3>
              </div>
            </div>
            <button
              role="link"
              onClick={createCheckoutSession}
              disabled={user ? false : true}
              className="clickButton button disabled:bg-gray-500 disabled:opacity-50 disabled:active:scale-100 md:w-44 md:py-1.5 w-16 py-0 md:text-base text-[6px]"
            >
              Book Now
            </button>
          </div>
        </div>
        {/* Seconed Div */}
        <div className="col-span-2 md:space-y-8 space-y-2">
          {/* Name */}
          <h1 className="md:text-5xl xs:text-2xl font-lato font-bold text-[#F48830]">
            Mousumi Zaman
          </h1>
          {/* Passport Details */}
          <div className="md:space-y-5 space-y-2">
            <h1 className="md:text-2xl xs:text-base text-[10px] text-[#234F7E] font-lato font-bold">
              Passport Details
            </h1>
            <div className="flex lg:space-x-52 md:space-x-20 space-x-10">
              <div className="space-y-1">
                <h3 className="md:text-base text-[7px]">Passport Number:</h3>
                <h3 className="md:text-base text-[7px]">Date of issue:</h3>
                <h3 className="md:text-base text-[7px]">Expiry Date:</h3>
                <h3 className="md:text-base text-[7px]">Place of issue:</h3>
              </div>
              <div className="space-y-1">
                <h3 className="md:text-base text-[7px]">00000</h3>
                <h3 className="md:text-base text-[7px]">30/11/2005</h3>
                <h3 className="md:text-base text-[7px]">30/11/2008</h3>
                <h3 className="md:text-base text-[7px]">loremds</h3>
              </div>
            </div>
          </div>
          {/* Candidate Details */}
          <div className="md:space-y-5 space-y-2">
            <h1 className="md:text-2xl xs:text-base text-[10px] text-[#234F7E] font-lato font-bold">
              Candidate Details
            </h1>
            <div className="flex lg:space-x-48 md:space-x-16 space-x-8">
              <div className="space-y-1">
                <h3 className="md:text-base text-[7px]">
                  Monthly salary (AED):
                </h3>
                <h3 className="md:text-base text-[7px]">Languages:</h3>
                <h3 className="md:text-base text-[7px]">Profesion:</h3>
                <h3 className="md:text-base text-[7px]">Visa Type:</h3>
                <h3 className="md:text-base text-[7px]">Experience:</h3>
              </div>
              <div className="space-y-1">
                <h3 className="md:text-base text-[7px]">5000</h3>
                <h3 className="md:text-base text-[7px]">Arabic</h3>
                <h3 className="md:text-base text-[7px]">
                  Profession House Maid
                </h3>
                <h3 className="md:text-base text-[7px]">visa</h3>
                <div>
                  <h3 className="md:text-base text-[7px]">
                    7 Years in Saudi arabia
                  </h3>
                  <h3 className="md:text-base text-[7px]">
                    4 Years in Saudi Dubai
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Can help with */}
          <div className="md:space-y-5 space-y-2">
            <h1 className="md:text-2xl xs:text-base text-[10px] text-[#234F7E] font-lato font-bold">
              Can help with
            </h1>
            <div className="flex md:space-x-5 space-x-2">
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-base text-[7px]">✔️</h1>
                <h1 className="md:text-base text-[7px]">Cleaning</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-base text-[7px]">✔️</h1>
                <h1 className="md:text-base text-[7px]">Cooking</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-base text-[7px]">✔️</h1>
                <h1 className="md:text-base text-[7px]">Ironing</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-base text-[7px]">✔️</h1>
                <h1 className="md:text-base text-[7px]">Baby Sitting</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-base text-[7px]">✔️</h1>
                <h1 className="md:text-base text-[7px]">Washing</h1>
              </div>
            </div>
          </div>
          {/* Recommendations that candidate provide */}
          <div className="space-y-2">
            <h1 className="md:text-2xl xs:text-xs text-[10px] text-[#234F7E] font-lato font-bold">
              Recommendations that Candidate can provide
            </h1>
            <h3 className="md:text-base text-[7px]">
              Not mentioned by the candidate
            </h3>
          </div>
        </div>
      </div>
      <hr className="my-8 h-px bg-[#234F7E] border-0 md:mt-14 mt-5" />
      <div className="relative cursor-pointer md:my-20 my-10">
        <div className="lg:w-[800px] md:w-full w-72 mx-auto">
          <Image
            src={thumbnail}
            alt="Thumbnail"
            width={800}
            height={450}
            className="rounded-xl"
          />
        </div>
        <div className="md:w-[90px] w-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition duration-100 ease-out">
          <Image src={play} alt="play" width={90} height={90} className="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(MaidProfile);
