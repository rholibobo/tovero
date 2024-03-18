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
import tonipash from "../../public/images/home/tonipash.png";
import green from "../../public/images/home/green.png";
import amber from "../../public/images/home/amber.png";
import red from "../../public/images/home/red.png";
import mecs from "../../public/images/home/mecs.png"
import asteven from "../../public/images/home/asteven.png"

export default function Home() {
  return (
    <main className="">
      {/* hero section */}
      <div className="h-screen flex justify-between">
        <div className="w-1/2 flex flex-col justify-center px-16">
          <div className="font-header text-4xl mb-2">
            <h1>
              Healing<span className="text-ltgreentext"> Earth,</span>
            </h1>
            <h1>Solving Carbon Problems</h1>
          </div>

          <p className="ptag text-justify">
            Tovero Energy has strategically positioned itself as a dependable
            partner as we lead discussions on how we can develop energy systems
            that are both resilient to prevailing climatic conditions, and
            capable to meet the growing demand for energy in ways that are both
            clean and sustainable.
          </p>
          <br />
          <CustomButton variant="primary">SEE EVENTS</CustomButton>
          <br />
          <div className="flex gap-2 items-center">
            <Image src={Rean} alt="logo" />
            <div>
              <p className="ptag">Tovero Energy Ltd is a member of </p>
              <p className="ptag">Renewable Energy Association of Nigeria</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={HeroImg} alt="Hero Image" className="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-[90%] my-0 mx-auto">
        {/* about-us section */}
        <section className="relative h-screen">
          <div className="flex justify-between">
            <h3 className="font-header text-4xl">ABOUT US</h3>
            <div className="w-3/4 ptag ">
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
          </div>
          <br />
          <br />
          <div>
            <Image src={SolarImg} alt="solar image" />

            <div className="w-1/2 h-[286px] absolute -bottom-20 right-0 bg-cardbg flex justify-between p-4 z-10 rounded-md border-white border-4">
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
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />

        {/*services section */}
        <section className="bg-drkgreenbg text-white pt-4 pb-12 px-4">
          <div className="flex justify-between">
            <div className="w-[40%]">
              <h1 className="font-header text-3xl">OUR SERVICES</h1>
              <p className="text-sm">
                We offer a wide range of integrated energy solutions tailored to
                meet the unique requirements of our clients
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 border border-white rounded-[50%]">
                <ArrowUpRight size={16} />
              </div>
              <Link href="#" className="text-sm underline">
                SEE MORE
              </Link>
            </div>
          </div>
          <br />
          <br />

          <div className="grid grid-cols-2 gap-x-3 gap-y-3">
            {home_services.map((card, index) => (
              <div
                key={index}
                className="bg-drkgreencard p-3 flex gap-2 rounded"
              >
                <Image src={card.image} alt="services image 1" />
                <div>
                  <h1 className="mb-2 font-header text-xl">{card.title}</h1>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <br />
        <br />
        <br />

        {/* ?? choose us */}
        <section className="relative">
          <h1 className="text-2xl font-header">WHY CHOOSE US</h1>
          <br />

          <div className="w-[80%] bg-redbg grid grid-cols-2 text-white py-16 pl-4 pr-24 relative">
            {chooseUs.map((item, index) => (
              <div
                className={`p-6 border-whote ${
                  index === 0 ? "border-r border-b" : ""
                }${index === 1 ? "border-l border-b" : ""}${
                  index === 2 ? "border-t border-r" : ""
                }${index === 3 ? "border-l border-t" : ""}`}
              >
                <Image src={item.image} />
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <Image
            src={ChooseUs}
            alt="why choose us image"
            className="absolute bottom-7 right-0 w-80"
          />
        </section>
        <br />
        <br />
        <br />

        {/* upcoming events */}
        <section>
          <h1 className="text-2xl font-header">UPCOMING EVENTS</h1>
          <br />

          <div className="w-2/3 grid grid-cols-2 gap-x-4 bg-cardbg p-1">
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
                <div className="flex justify-between items-center shadow-md bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex items-center gap-1">
                    {/* <div className="w-3 h-3 bg-red-500 rounded-full"></div> */}
                    <Image src={red} alt="" className="w-3" />
                    <p className="text-sm">Abstract/Full Paper Submission</p>
                  </div>

                  <p className="font-bold text-sm">Sept. 17th, 2024</p>
                </div>
                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex  items-center gap-1">
                    {/* <div className="w-5 h-5 bg-orange-500 rounded-[50%]"></div> */}
                    <Image src={amber} alt="" className="w-4" />
                    <p className="text-sm">
                      Abstract/Full Paper Submission Deadline
                    </p>
                  </div>

                  <p className="font-bold text-sm">Sept. 17th, 2024</p>
                </div>
                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex  items-center gap-1">
                    {/* <div className="w-3 h-3 bg-green-700 rounded-full"></div> */}
                    <Image src={green} alt="" className="w-3" />
                    <p className="text-sm">Conference </p>
                  </div>

                  <p className="font-bold text-sm">Sept. 17th, 2024</p>
                </div>
                <br />
                <CustomButton variant="secondary">Register</CustomButton>
              </div>
            </div>
            <div className="">
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
                {/* <br /> */}

                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex  items-center gap-1">
                    {/* <div className="w-5 h-5 bg-orange-500 rounded-[50%]"></div> */}
                    <Image src={green} alt="" className="w-3" />
                    <p className="text-sm">Date</p>
                  </div>

                  <p className="font-bold text-sm">Sept. 17th, 2024</p>
                </div>
                <div className="flex justify-between items-center bg-cardbg rounded-full w-full h-12 p-3 mb-2">
                  <div className="w-[60%] flex  items-center gap-1">
                    {/* <div className="w-3 h-3 bg-green-700 rounded-full"></div> */}
                    <Image src={amber} alt="" className="w-3" />
                    <p className="text-sm">Venue </p>
                  </div>

                  <p className="font-bold text-sm">ZOOM/YOUTUBE</p>
                </div>
                <br />
                <CustomButton variant="secondary">Register</CustomButton>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
      {/* our partners */}
      <section>
        <h1 className="text-2xl font-header ml-16">OUR PARTNERS</h1>
        <br />
        <div className="bg-cardbg w-full h-[20vh] flex justify-center items-center gap-24 ">
            <Image src={mecs} alt="MECS" />
            <Image src={asteven} alt="ASTEVEN" />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
