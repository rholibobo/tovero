"use client";

import Image from "next/image";
import CustomButton from "../button/button";
import clockIcon from "../../../public/images/aicess/clock.png";
import { usePathname } from "next/navigation";

function ConferenceHero({ HeroImg, title, description, image }) {
  const pathname = usePathname();
  const isAiccess = pathname === "/tovero";
  
  return (
    <div className="h-[60vh] md:h-[50vh] lg:h-screen flex justify-between relative">
      <div className="flex flex-col md:flex-row justify-between md:justify-center">
        <div className={`w-full md:w-[90%] lg:w-1/2 flex flex-col justify-center`}>
          <div className="w-[80%] my-0 mx-auto">
            <div className="flex justify-center">
              <Image src={image} alt="conference image" />
            </div>

            <div>
              <div className="font-header text-xl lg:text-4xl mb-2">
                <h1 className="font-header text-center text-ltgreentext">
                  {title}
                </h1>
              </div>

              <p className="text-redtext text-sm font-bold text-center">
                {description}
              </p>
            </div>
            <br />

            <div className="flex flex-col md:flex-row gap-4">
              <CustomButton variant="primary" className="w-full lg:w-1/2 order-2 md:order-1">Register</CustomButton>
              <div className="w-full gap-2 flex items-center justify-center bg-cardbg px-2 md:px-3 py-5 md:py-1 order-1 md:order-2">
                <Image src={clockIcon} alt="clock icon" />
                <p className="text-sm font-bold text-prigreentext ">
                  250 Days: 28 hours: 33 Minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-end">
          <Image src={HeroImg} alt="Hero Image"  />
        </div>
      </div>
      <div className="w-full lg:w-[46.4%] h-5 bg-red-600 absolute bottom-0 pr-16"></div>
    </div>
  );
}

export default ConferenceHero;
