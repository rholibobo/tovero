"use client"

import ConferenceHero from "@/components/hero/conference";
import HeroImg from "../../../public/images/aicess/aicess_hero.png";
import aicessImg from "../../../public/images/aicess/aicess_aicess.png";
import {
  ConferencesInfo,
  ConferenceStats,
  ConferenceStatsAicess,
} from "@/components/conferences/conferences";
import { aicess } from "@/data_models/conferences";
import Sponsors from "@/components/conferences/sponsors";
import DetailsItemized from "@/components/conferences/itemized";
import Submissions from "@/components/conferences/submissions";
import { motion } from "framer-motion";
import Image from "next/image";
import SponsorsCarousel from "@/components/sponsors_carousel/carousel";
import KeynoteSpeakerCard from "@/components/keynote-speaker/KeynoteSpeakerCard";
import { keynoteSpeakerData } from "@/data_models/keynote-speakers";
import StudentBonus from "@/components/student-bonus/StudentBonus";


function Aicess() {
  const title =
    "Africa International Conference on Clean Energy & Energy Storage";
  const description = "AICCEES 2024";
  return (
    <main className="scroll-smooth">
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <ConferenceHero
        HeroImg={HeroImg}
        image={aicessImg}
        title={title}
        description={description}
      />
      <br />
      <br />

      <div className="w-[90%] my-0 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row justify-between"
        >
          {aicess["aicessInfo"].map((info, index) => (
            <div key={index} className="w-full lg:w-[60%]">
              <ConferencesInfo
                title={info.title}
                paragraph1={info.paragraph1}
                paragraph2={info.paragraph2}
              />
            </div>
          ))}

          <ConferenceStatsAicess />
        </motion.div>
        <br />
        <br />
        <DetailsItemized />
        <br />
        <br />
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <h4 className="text-center text-2xl font-header uppercase md:text-3xl text-[#006547]">
            Confirmed Keynote Speakers at the AICCEES 2024 Conference
          </h4>
          <br />
          <div className="flex flex-col gap-10 items-center justify-between">
           {keynoteSpeakerData.map(keynotespeaker=>(
            <KeynoteSpeakerCard name={keynotespeaker.name} picture={keynotespeaker.picture} description1={keynotespeaker.description1} description2={keynotespeaker.description2} />
           ))}
          </div>
        </motion.section>  
      </div>
      <br />
      <br />
      <StudentBonus />
          <br />
        <br />
        <section className="w-11/12 mx-auto">
        <h4 className="text-center text-2xl mb-4 font-header uppercase md:text-3xl text-[#006547]">Sponsors</h4>
         <br />
      <SponsorsCarousel />
      <br />
      <br />
        <Sponsors />
      </section>
        <br />
        <br />
      <Submissions />
      <br />
      <br />
      
     
    </main>
  );
}

export default Aicess;
