import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-black/10 via-white">
      <div className="flex items-center justify-between px-[230px]">
        {/* LOGO */}
        <div className="py-4">
          <Image src="/icon.png" alt="LOGO" width={119} height={83} />
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-28 items-center mt-16">
        {/* Brand */}
        <div className="flex items-center space-x-28">
          <Link href="#third">
            <div className="p-[22px] border-2 border-r-[#FA03FF]/30 border-t-[#FA03FF]/30 border-l-[#624DE3]/30 border-b-[#624DE3]/30 rounded-3xl">
              <div className="h-[60px] w-[60px] flex items-center justify-center">
                <div className="w-[60px] h-[40px] min-h-[40px]">
                  <Image
                    src="/third.jpeg"
                    alt="third"
                    width={60}
                    height={40}
                    className=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href="#elit">
            <div className="p-[22px] border-2 border-r-[#FA03FF]/30 border-t-[#FA03FF]/30 border-l-[#624DE3]/30 border-b-[#624DE3]/30 rounded-3xl">
              <div className="h-[60px] w-[60px] flex items-center justify-center">
                <div className="w-[60px] h-[40px] min-h-[40px]">
                  <Image
                    src="/elit.png"
                    alt="Elituer"
                    width={60}
                    height={40}
                    className=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href="#fkf">
            <div className="p-[22px] border-2 border-r-[#FA03FF]/30 border-t-[#FA03FF]/30 border-l-[#624DE3]/30 border-b-[#624DE3]/30 rounded-3xl">
              <div className="h-[60px] w-[60px] flex items-center justify-center">
                <div className="w-[60px] h-[40px] min-h-[40px]">
                  <Image
                    src="/fkf.png"
                    alt="fkf"
                    width={60}
                    height={40}
                    className=""
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Title */}
        <div className="flex flex-col items-center space-y-7">
          <h1 className="font-bold text-5xl text-[#181E25]">Matrixtudios</h1>
          <p className="text-[#624DE3] text-2xl italic font-semibold">
            Elevating human conditions through tech edge solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
