import Image from "next/image";
import CustomButton from "../button/button";
import clockIcon from "../../../public/images/aicess/clock.png";

function ConferenceHero({ HeroImg, title, description, image }) {
  return (
    <div className="h-screen flex justify-between relative">
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center px-16">
            <div className="flex justify-center">
            <Image src={image} alt="conference image" />
            </div>
          
          <div className="">
            <div className="font-header text-4xl mb-2 text-prigreentext">
              <h1 className="font-header text-center text-ltgreentext text-4xl">
                {title}
              </h1>
            </div>

            <p className="text-redtext text-sm font-bold text-center">{description}</p>
          </div>
          <br />

          <div className="flex justify-between">
            <CustomButton variant="primary" className="w-[35%]">Register</CustomButton>
            <div className="w-[60%] gap-2 flex items-center bg-cardbg px-3">
              <Image src={clockIcon} alt="clock icon" />
              <p className="text-sm font-bold text-prigreentext">250 Days: 28 hours: 33 Minutes</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Image src={HeroImg} alt="Hero Image" className="" />
        </div>
      </div>
      <div className="w-[46.8%] h-5 bg-red-600 absolute bottom-0 pr-16"></div>
    </div>
  );
}

export default ConferenceHero;
