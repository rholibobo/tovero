import Image from "next/image";
import HeroImg from "../../public/images/home/hero_img.png";
import Rean from "../../public/images/home/rean.png";
import SolarImg from "../../public/images/home/solar.png";
import CustomButton from "@/components/button/button";

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
      </div>
      <br />
      <br />
      <br />
    </main>
  );
}
