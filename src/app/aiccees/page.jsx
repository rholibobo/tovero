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
import profFoluwake from "../../../public/images/keynote_speakers/Foluke_Ishola.jpg"
import profSokona from "../../../public/images/keynote_speakers/sokono.jpg"
import { motion } from "framer-motion";
import Image from "next/image";
import SponsorsCarousel from "@/components/sponsors_carousel/carousel";

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
            <div className="shadow rounded-md bg-green-100 text-green-800  hover:border-white flex flex-col gap-3 lg:flex-row-reverse items-start lg:items-start md:gap-6 p-4">
              <Image className="" src={profSokona} alt="prof Sokona" />
              <div className="">
                <h5 className="font-semibold text-red-600 text-xl mb-2">Professor Youba Sokona</h5>
                <p className="text-justify">Prof Sokona, with over 40 years of experience addressing energy, environment and sustainable development in Africa, has been at the heart of numerous national and continental initiatives. He was a ViceChair of the Intergovernmental Panel on Climate Change sixth assessment report after serving as Co-Chair of IPCC Working Group III for the fifth assessment report following being a Lead Author since 1990. He has a proven track record of organisational leadership and management, for example as Inaugural Coordinator of the African Climate Policy Centre and as Executive Secretary of the Sahara and the Sahel Observatory.
                  <br />
                  He is affiliated with numerous boards and organisations. For example among others he is Honorary Professor at University College London, member of The World Academy of Sciences, the African Academy of Sciences, the International Council of Science, Associate member of the National Academy of Sciences and Technology of Senegal and Honorary member of the Academy of Sciences of Mali. In short, Prof SOKONA is a global figure, with deep technical knowledge, extensive policy experience and an unreserved personal commitment to African led development.</p>
              </div>
            </div>
            <div className="shadow rounded-md bg-green-100 text-green-800 hover:border-white flex flex-col gap-3 lg:flex-row-reverse items-start lg:items-start md:gap-6 p-4">
              <Image className="lg:w-1/3" src={profFoluwake} alt="prof foluwake" />
              <div className="">
                <h5 className="font-semibold text-red-600 text-xl mb-2">Professor Foluke Ishola</h5>
                <p className="text-justify"> Mofoluwake Ishola, a distinguished Chemical Engineer, graduated from Ladoke Akintola University of Technology in 2002 and earned her M.Sc. with Distinction from Obafemi Awolowo University in 2008. She completed her PhD at the University of Borås, Sweden, in record time, focusing on biofuel ethanol production from lignocellulosic feedstocks. Her postdoctoral research was conducted at Chalmers University. Her expertise spans bioenergy, waste management, biofuels, and environmental sustainability. Mofoluwake has served as a university lecturer, environmental engineer, and journal reviewer, supervising numerous postgraduate students and authoring around thirty academic publications. She has received multiple scholarships and grants, including the Carnegie Scholarship (UK) and Fredrika Bremer Scholarship (Sweden). Currently, she is the Sustainability Ambassador and Senior R&D Engineer at Scanacon AB, Sweden, and a Visiting Professor at Ajayi Crowther University, Nigeria. She is affiliated with various professional engineering societies in Nigeria and Sweden.</p>
              </div>
            </div>
          </div>
        </motion.section>  
      </div>
      <br />
      <br />
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
