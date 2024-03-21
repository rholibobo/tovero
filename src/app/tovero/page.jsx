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
      <div className="h-screen flex">
        <div className="w-[50%] flex flex-col items-center justify-center">
          <Image src={toveroImg} alt="tovero image logo" />
          <br />
          <br />
          <div className="w-[80%] my-0 mx-auto flex gap-6">
            <CustomButton variant="primary" className="">
              Register
            </CustomButton>
            <div className="gap-2 flex items-center bg-cardbg px-4 py-2">
              <Image src={clockIcon} alt="clock icon" />
              <p className="text-sm font-bold text-prigreentext">
                250 Days: 28 hours: 33 Minutes
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-end">
          <Image src={HeroImg} alt=" hero image" />
        </div>
      </div>
      <br />
      <br />

      <div className="w-[90%] my-0 mx-auto">
        <div className="flex justify-between">
          {tovero["toveroInfo"].map((info, index) => (
            <div key={index} className="w-[60%]">
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
