"use client";

import Image from "next/image";
import CustomButton from "../button/button";
import clockIcon from "../../../public/images/aicess/clock.png";
import { usePathname } from "next/navigation";

function ConferenceHero({ HeroImg, title, description, image }) {
  const pathname = usePathname();
  const isAiccess = pathname === "/tovero";
  
  return (
    <div className="h-screen flex justify-between relative">
      <div className="flex justify-between">
        <div className={`w-1/2 flex flex-col justify-center`}>
          <div className={`w-[80%] my-0 mx-auto`}>
            <div className="flex justify-center">
              <Image src={image} alt="conference image" />
            </div>

            <div>
              <div className="font-header text-4xl mb-2 text-prigreentext">
                <h1 className="font-header text-center text-ltgreentext text-4xl">
                  {title}
                </h1>
              </div>

              <p className="text-redtext text-sm font-bold text-center">
                {description}
              </p>
            </div>
            <br />

            <div className="flex gap-4">
              <CustomButton variant="primary">Register</CustomButton>
              <div className="gap-2 flex items-center bg-cardbg px-3">
                <Image src={clockIcon} alt="clock icon" />
                <p className="text-sm font-bold text-prigreentext">
                  250 Days: 28 hours: 33 Minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Image src={HeroImg} alt="Hero Image" />
        </div>
      </div>
      <div className="w-[46.4%] h-5 bg-red-600 absolute bottom-0 pr-16"></div>
    </div>
  );
}

export default ConferenceHero;
