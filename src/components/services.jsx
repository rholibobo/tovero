"use client"

import Image from "next/image";
import heroImg from "../../public/images/services/hero_services_img.png";
import { serviceHeaders, serviceInfo } from "@/data_models/services_detail";
import { useState } from "react";

function Services() {
    const [activeIndex, setActiveIndex] = useState();

    const isActive = (index) => {
        setActiveIndex(index + 1)
        console.log(index)
    }
  return (
    <main>
      <div className="h-screen flex justify-between relative">
        <div className="w-1/2 flex flex-col justify-center px-16 ">
          <div className="font-header text-4xl mb-2 text-prigreentext">
            <h1>OUR SERVICES</h1>
          </div>

          <p className="ptag text-justify mb-2">
            From renewable sources to cutting-edge technologies, we strive to
            deliver reliable and efficient energy services that empower your
            success while safeguarding the planet for future generations.
          </p>
        </div>
        <div className="flex justify-end">
          <Image src={heroImg} alt="Hero Image" className="" />
        </div>
        <div className="w-[46.8%] h-5 bg-red-600 absolute bottom-0 pr-16"></div>
      </div>
      <br />
      <br />
      <br />

      <div className="w-[90%] my-0 mx-auto">
        <div className="grid grid-cols-6 gap-4 ">
          {serviceHeaders.map((item, index) => (
            <div
              key={index}
              onClick={() => isActive(index)}
              className={`bxshadow p-2 flex justify-center items-center rounded-md cursor-pointer border-b-red-500 border-4`}
            >
              <p className="ptag text-[12px] font-bold text-center">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
    </main>
  );
}

export default Services;
