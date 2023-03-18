import Image from "next/image";
import React from "react";

const Fkf = () => {
  return (
    <div className="h-screen relative">
      {/* Vector */}
      <div className="flex items-end justify-end">
        <Image
          src="/fkfSection.png"
          alt="Elit vector"
          width={10000}
          height={100}
        />
      </div>
      {/* Content */}
      <div className="absolute top-[70%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 space-y-10">
        <div>
          <Image src="/fkf.png" alt="Elit" width={433} height={270} />
        </div>
        <h1 className="text-[#005ADD] font-bold text-5xl">
          FKF - Our NGO Partner
        </h1>
        <h4 className="text-[#778490] font-semibold text-xl w-[500px]">
          We believe that our humanity is defined by our commitment to ensure
          the happiness of our animals. Therefore the conservation of animal
          well being is a vital service.
        </h4>
        <button className="bg-[#005ADD] clickButton button font-semibold">
          Visit Website
        </button>
      </div>
      {/* Footer */}
      <div className="pb-5">
        <div className="max-w-4xl grid grid-cols-3 mx-auto h-96 pt-28 text-center">
          <div className="space-y-10 text-left">
            <h1 className="text-lg font-semibold text-[#2A1371]">
              Location Details
            </h1>
            <h4
              className="text-[#2A1371] font-medium pl-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Jalan+PJU+10%2F9,+Damansara+Damai,+47830+Petaling+Jaya,+Selangor,+Malaysia/@3.1973475,101.5972362,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc45f14ecdadcf:0xa3b4262aeaa2bbe3!8m2!3d3.1973421!4d101.5994249!16s%2Fg%2F1tfwgwpx",
                  "_blank"
                )
              }
            >
              E42A, Jln PJU 10/9, Prima Damansara PETALING JAYA 47830 Petaling
              Jaya Malaysia
            </h4>
          </div>
          <div className="space-y-10">
            <h1 className="text-lg font-semibold text-[#2A1371]">
              Phone number
            </h1>
            <h4 className="text-[#2A1371] font-medium pl-2">
              <a
                href="https://api.whatsapp.com/send?phone=60109004294"
                target="_blank"
                rel="noreferrer"
              >
                +60109004294
              </a>
            </h4>
          </div>
          <div className="space-y-10">
            <h1 className="text-lg font-semibold text-[#2A1371]">Email</h1>
            <h4 className="text-[#2A1371] font-medium pl-2">
              <a
                href="mailto:missiondesk@matrixtudios.com"
                target="_blank"
                rel="noreferrer"
              >
                missiondesk@matrixtudios.com
              </a>
            </h4>
          </div>
        </div>
        <div className="max-w-3xl mx-auto flex items-center justify-end space-x-5">
          <Image
            src="/twitter.png"
            className="cursor-pointer"
            alt="Twitter"
            width={17}
            height={14}
          />
          <Image
            src="/link.png"
            className="cursor-pointer"
            alt="link"
            width={17}
            height={14}
          />
          <Image
            src="/facebook.png"
            className="cursor-pointer"
            alt="facebook"
            width={12}
            height={14}
          />
        </div>
      </div>
    </div>
  );
};

export default Fkf;
