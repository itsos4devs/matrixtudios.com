import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <Image
        src="/about.png"
        alt="about placeholder"
        width={10000}
        height={100}
        priority
      />
    </div>
  );
};

export default About;
