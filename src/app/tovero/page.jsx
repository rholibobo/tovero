import ConferenceHero from "@/components/hero/conference";
import HeroImg from "../../../public/images/aicess/aicess_hero.png";
import clockIcon from "../../../public/images/aicess/clock.png";
import toveroImg from "../../../public/images/aicess/tovero_img.png";
import Image from "next/image";
import CustomButton from "@/components/button/button";
import {
  ConferenceStats,
  ConferenceStatsTovero,
  ConferencesInfo,
} from "@/components/conferences/conferences";
import { tovero } from "@/data_models/conferences";
import Sponsors from "@/components/conferences/sponsors";
import DetailsItemized from "@/components/conferences/itemized";
import Submissions from "@/components/conferences/submissions";

function Tovero() {
  //     const title =
  //     "Africa International Conference on Clean Energy & Energy Storage";
  //   const description = "AICCEES 2024";
  return (
    <main className="w-full">
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <div className="h-[65vh] md:h-[50vh] lg:h-screen flex relative">
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center">
          <Image
            src={toveroImg}
            alt="tovero image logo"
            className="w-1/2 md:w-100%"
          />
          <br />
          <br />
          <div className="w-[80%] md:my-0 md:mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6">
            <CustomButton
              variant="primary"
              className="w-full lg:w-2/3 order-2 lg:order-1 py-4 lg:py-0"
            >
              Register
            </CustomButton>
            <div className="w-full gap-2 flex items-center justify-center bg-cardbg px-4 py-4 lg:py-2 order-1 lg:order-2 ">
              <Image src={clockIcon} alt="clock icon" />
              <p className="text-sm font-bold text-prigreentext">
                250 Days: 28 hours: 33 Minutes
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] justify-end hidden md:flex">
          <Image src={HeroImg} alt=" hero image" />
        </div>
        <div className="w-full md:w-[50%] h-5 bg-red-600 absolute bottom-0 pr-16"></div>
      </div>
      <br />
      <br />

      <div className="w-[90%] my-0 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {tovero["toveroInfo"].map((info, index) => (
            <div key={index} className="w-full lg:w-[60%]">
              <ConferencesInfo
                title={info.title}
                paragraph1={info.paragraph1}
                paragraph2={info.paragraph2}
              />
            </div>
          ))}

          <ConferenceStatsTovero />
        </div>

        <br />
        <br />
        <Sponsors />
        <br />
        <br />
        <DetailsItemized />
        <br />
        <br />
      </div>
      <Submissions />
      <br />
      <br />
    </main>
  );
}

export default Tovero;
