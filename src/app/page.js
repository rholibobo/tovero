import Image from "next/image";
import HeroImg from "../../public/images/home/hero_img.png";
import Rean from "../../public/images/home/rean.png"
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
        <Image src={HeroImg} alt="Hero Image" className=""/>
        </div>

          
        
        <br />
        
      </div>
    </main>
  );
}
