"use client";

import Image from "next/image";
import HeroImg from "../../public/images/home/hero_img.png";
import Rean from "../../public/images/home/rean.png";
import SolarImg from "../../public/images/home/solar.png";
import ChooseUs from "../../public/images/home/choose_us.png";
import CustomButton from "@/components/button/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import home_services from "@/data_models/home_services";
import chooseUs from "@/data_models/why_choose_us";
import aicess from "../../public/images/home/aicess.png";
import green from "../../public/images/home/green.png";
import amber from "../../public/images/home/amber.png";
import red from "../../public/images/home/red.png";
import { motion } from "framer-motion";
import SponsorsCarousel from "@/components/sponsors_carousel/carousel";

export default function Home() {
  return (
    <main className="">
      {/* hero section */}
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <div className="w-[95%] lg:w-full mx-auto md:mx-0 my-0 h-auto lg:h-screen flex-col lg:flex-row flex justify-between">
        <div className="w-full lg:w-1/2 flex flex-col justify-center md:px-16">
          <div className="w-full font-header text-4xl mb-2">
            <h1 className="text-center md:text-left">
              Healing<span className="text-ltgreentext"> Earth,</span>
            </h1>
            <h1 className="text-center md:text-left">
              Solving Carbon Problems
            </h1>
          </div>

          <p className="ptag text-center md:text-justify mb-2">
            Tovero Energy has strategically positioned itself as a dependable
            partner as we lead discussions on how we can develop energy systems
            that are both resilient to prevailing climatic conditions, and
            capable to meet the growing demand for energy in ways that are both
            clean and sustainable.
          </p>
          <br />
          <Link href="/aiccees">
            <div className="flex justify-center md:justify-start">
              <CustomButton variant="primary">SEE EVENTS</CustomButton>
            </div>
          </Link>

          <br />
          <div className="flex gap-2 items-center justify-center md:justify-start mt-2 mb-6 lg:mb-0">
            <Image src={Rean} alt="logo" />
            <div>
              <p className="ptag">Tovero Energy Ltd is a member of </p>
              <p className="ptag">Renewable Energy Association of Nigeria</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={HeroImg} alt="Hero Image" loading="lazy" className="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-[95%] md:w-[90%] my-0 mx-auto">
        {/* about-us section */}
        <section className="relative h-auto lg:h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex flex-col md:flex-row justify-between"
          >
            <h3 className="font-header text-center md:text-left text-4xl mb-2 md:mb-0">
              ABOUT US
            </h3>
            <div className="w-full md:w-3/4 ptag ">
              <p className="ptag text-justify">
                At Tovero Energy Ltd, our mission is to empower futures through
                sustainable energy solutions. As international organizations and
                countries seek innovative approaches to transition to cleaner
                and more sustainable energy, Tovero Energy emerges as a striving
                partner. We spearhead discussions and initiatives aimed at
                developing resilient energy systems capable of meeting the
                growing demand for energy while prioritizing cleanliness and
                sustainability.
              </p>
              <br />
              <p className="ptag text-justify">
                As a dedicated participant in the industry, we are committed to
                driving positive change and fostering sustainable development
                through innovative energy technologies and services.
              </p>
            </div>
          </motion.div>
          <br />
          <br />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Image
              src={SolarImg}
              alt="solar image"
              className="hidden md:block"
            />

            <div className="hidden w-1/2 h-[286px] absolute -bottom-20 right-0 bg-cardbg md:flex justify-between p-4 z-10 rounded-md border-white border-4">
              <div className="w-[45%] flex items-end text-[14px]">
                <div>
                  <p className="text-redtext font-header text-xl font-bold mb-3">
                    OUR MISSION
                  </p>

                  <p className="ptag text-justify">
                    To empower individuals, communities, and industries by
                    delivering tailored and innovative sustainable energy
                    solutions that drive positive environmental impact, economic
                    growth, and social progress
                  </p>
                </div>
              </div>
              <div className="w-[45%] flex justify-end text-[14px]">
                <div>
                  <p className="text-prigreentext font-header text-xl font-bold mb-3">
                    OUR VISION
                  </p>

                  <p className="ptag text-justify">
                    Empowering Futures Through Sustainable Energy Solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <div className="bg-cardbg mb-4 text-center px-6 py-4">
                <p className="text-redtext font-header text-xl font-bold mb-3">
                  OUR MISSION
                </p>

                <p className="ptag ">
                  To empower individuals, communities, and industries by
                  delivering tailored and innovative sustainable energy
                  solutions that drive positive environmental impact, economic
                  growth, and social progress
                </p>
              </div>
              <div className="bg-cardbg text-center px-6 py-4">
                <p className="text-prigreentext font-header text-xl  font-bold mb-3">
                  OUR VISION
                </p>

                <p className="ptag ">
                  Empowering Futures Through Sustainable Energy Solutions
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />

        {/*services section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="bg-drkgreenbg text-white pt-6 md:pt-4 pb-12 px-4"
        >
          <div className="flex justify-between">
            <div className="w-full md:w-[40%] text-center md:text-left">
              <h1 className="font-header text-3xl">OUR SERVICES</h1>
              <p className="text-sm">
                We offer a wide range of integrated energy solutions tailored to
                meet the unique requirements of our clients
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm underline hover:text-ltgreentext"
            >
              <div className="hidden md:flex items-center gap-2 hover:text-ltgreentext">
                <div className="flex justify-center items-center w-8 h-8 border border-white rounded-[50%]">
                  <ArrowUpRight size={16} />
                </div>

                <h1>SEE MORE</h1>
              </div>
            </Link>
          </div>
          <br />
          <br />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3">
            {home_services.map((card) => (
              <div
                key={card.id}
                className="bg-drkgreencard p-3 flex gap-2 rounded"
              >
                <Image
                  src={card.image}
                  alt="services image 1"
                  className="hidden md:block"
                />
                <div className="text-center md:text-left">
                  <h1 className="mb-2 font-header text-xl">{card.title}</h1>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <br />
        <br />
        <br />

        {/* ?? choose us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="relative"
        >
          <h1 className="text-2xl font-header text-center md:text-left">
            WHY CHOOSE US
          </h1>
          <br />

          <div className="w-full lg:w-[80%] bg-redbg grid grid-cols-1 lg:grid-cols-2 text-white py-6 md:py-16 pl-4 pr-0 md:pr-24 relative mb-4 lg:mb-0">
            {chooseUs.map((item, index) => (
              <div
                key={item.id}
                className={`p-6 border-white ${
                  index === 0 ? "border-r-0 lg:border-r border-b" : ""
                }${index === 1 ? "border-l-0 lg:border-l border-b" : ""}${
                  index === 2 ? "lg:border-t lg:border-r" : ""
                }${index === 3 ? "lg:border-l border-t" : ""}`}
              >
                <div className="flex justify-center md:justify-start mb-1">
                  <Image src={item.image} alt="choose" />
                </div>

                <h1 className="text-xl font-bold text-center md:text-left mb-1">
                  {item.title}
                </h1>
                <p className="text-sm text-center md:text-left mb-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Image
            src={ChooseUs}
            alt="why choose us image"
            className="hidden lg:block absolute bottom-7 right-0 w-80"
          />
          <Image
            src={ChooseUs}
            alt="why choose us image"
            className="block lg:hidden"
          />
        </motion.div>
        <br />
        <br />
        <br />

        {/* upcoming events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <h1 className="text-2xl font-header text-center md:text-left">
            UPCOMING EVENTS
          </h1>
          <br />

          <div className="w-full lg:w-[40%] gap-x-4 gap-y-6 bg-cardbg p-1">
            <div className="">
              <div className="flex justify-center ">
                <Image src={aicess} alt="aicess image" />
              </div>

              <br />
              <div className="bg-white shadow p-4">
                <p className="text-redtext text-sm">AICCEES 2024</p>
                <p className="text-ltgreentext text-lg font-bold">
                  Africa International Conference on Clean Energy & Energy
                  Storage
                </p>
                <br />
                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex items-center gap-1">
                    {/* <div className="w-3 h-3 bg-red-500 rounded-full"></div> */}
                    <Image src={red} alt="" className="w-3" />
                    <p className="text-sm">Abstract/Full Paper Submission</p>
                  </div>

                  <p className="font-bold text-sm">Feb. 1st, 2024</p>
                </div>
                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex  items-center gap-1">
                    {/* <div className="w-5 h-5 bg-orange-500 rounded-[50%]"></div> */}
                    <Image src={amber} alt="" className="w-4" />
                    <p className="text-sm">
                      Abstract/Full Paper Submission Deadline
                    </p>
                  </div>

                  <p className="font-bold text-sm">Jul. 31st, 2024</p>
                </div>
                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[30%] flex  items-center gap-1">
                    {/* <div className="w-3 h-3 bg-green-700 rounded-full"></div> */}
                    <Image src={green} alt="" className="w-3" />
                    <p className="text-sm">Conference </p>
                  </div>

                  <p className="font-bold text-sm">Sept. 26th & 27th, 2024</p>
                </div>
                <br />
                <CustomButton variant="secondary">Register</CustomButton>
              </div>
            </div>
            {/* <div className="">
              <div className="flex justify-center ">
                <Image src={tonipash} alt="aicess image" />
              </div>

              <br />
              <div className="bg-white shadow p-4">
                <p className="text-redtext text-sm">14th Edition</p>
                <p className="text-ltgreentext text-lg font-bold mb-5">
                  Tovero Sustainable Energy Talk
                </p>
                <p className="ptag text-sm mb-4">
                  SUSTAINABLE ENERGY IN NIGERIA: Opportunities, Challenges &
                  Prospects
                </p>
                <br />
                

                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex  items-center gap-1">
                    
                    <Image src={ltgreen} alt="" className="w-3" />
                    <p className="text-sm">Date</p>
                  </div>

                  <p className="font-bold text-sm">Sept. 17th, 2024</p>
                </div>
                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex  items-center gap-1">
                   
                    <Image src={amber} alt="" className="w-3" />
                    <p className="text-sm">Venue </p>
                  </div>

                  <p className="font-bold text-sm">ZOOM/YOUTUBE</p>
                </div>
                <br />
                <CustomButton variant="secondary">Register</CustomButton>
              </div> 
            </div> */}
          </div>
        </motion.div>
        <br />
        <br />
        <br />
      </div>
      {/* our partners */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <h1 className="text-2xl font-header text-center md:text-left ml-0 md:ml-16">
          OUR PARTNERS
        </h1>
        <br />
        <div className="bg-cardbg w-full h-auto flex items-center justify-between">
          <div className="w-[90%] mx-auto my-0 flex items-stretch">
            <SponsorsCarousel />
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
