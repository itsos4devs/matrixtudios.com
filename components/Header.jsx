import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[230px]">
      {/* LOGO */}
      <div className="py-4">
        <Image src="/icon.png" alt="LOGO" width={119} height={83} />
      </div>
      {/* Menu */}
      <div>
        <ul className="space-x-7">
          <Link href="#home" className="font-semibold text-base">
            Home
          </Link>
          <Link href="#" className="font-semibold text-base">
            Elituer
          </Link>
          <Link href="#" className="font-semibold text-base">
            FKF
          </Link>
          <Link href="#about" className="font-semibold text-base">
            About Us
          </Link>
          <Link href="#" className="font-semibold text-base">
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
