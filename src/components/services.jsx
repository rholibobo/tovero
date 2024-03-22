"use client";

import Image from "next/image";
import heroImg from "../../public/images/services/hero_services_img.png";
import { serviceHeaders, serviceInfo } from "@/data_models/services_detail";
import { useState, useRef } from "react";

// //// SWIPER IMPORTS /////// //
import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import IdenticalHero from "./hero/hero";
import { useNavigationContext } from "@/context/navContext";

function Services() {
  
  const title = "OUR SERVICES";
  const description =
    "From renewable sources to cutting-edge technologies, we strive to deliver reliable and efficient energy services that empower your success while safeguarding the planet for future generations.";

  // const [activeIndex, setActiveIndex] = useState(0);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const swiperRef = useRef(null);

  // const isActive = (index) => {
  //   setActiveIndex(index);
  //   setSelectedIndex(index);
  //   swiperRef.current?.swiper.slideTo(index);
  // };
  // const handleSwiperSlideChange = (swiper) => {
  //   setSelectedIndex(swiper.activeIndex);
  //   setActiveIndex(swiper.activeIndex);
  // };
  const {activeIndex, swiperRef, isActive, handleSwiperSlideChange} = useNavigationContext()
  return (
    <main>
      
      <IdenticalHero
        title={title}
        description={description}
        HeroImg={heroImg}
      />
      <br />
      <br />
      <br />

      <div className="w-[90%] my-0 mx-auto">
        <div className="grid grid-cols-6 gap-4 mb-2">
          {serviceHeaders.map((item, index) => (
            <div
              key={index}
              onClick={() => isActive(index)}
              className={`bxshadow w-full h-12 flex p-2 justify-center items-center rounded-md cursor-pointer ${
                activeIndex === index
                  ? "border-b-red-500 border-4 text-ltgreentext"
                  : "text-primarytext"
              }`}
            >
              <p className="text-[12px] font-bold text-center text-wrap">
                {item}
              </p>
            </div>
          ))}
        </div>
        <br />
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSwiperSlideChange}
          modules={[Pagination, Scrollbar, Navigation]}
          slidesPerView={1}
        >
          {serviceInfo.map((item, index) => (
            <div key={index}>
              <SwiperSlide>
                <div className="flex justify-between">
                  <div
                    className={`w-[40%] ${activeIndex === 1 ? "order-2" : ""}${
                      activeIndex === 3 ? "order-2" : ""
                    }${activeIndex === 5 ? "order-2" : ""}`}
                  >
                    <Image src={item.image} />
                  </div>

                  <div id={item.description} className="w-[58%] flex flex-col justify-center gap-3">
                    <h1 className="font-header text-3xl font-bold">
                      {item.title}
                    </h1>
                    <p className="ptag">{item.description}</p>
                    {/* <p dangerouslySetInnerHTML={} /> */}
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

      <br />
      <br />
      <br />
    </main>
  );
}

export default Services;
