import IdenticalHero from "@/components/hero/hero";
import heroImg from "../../../public/images/publishers/publishers_hero.png";
import { publisherInfo, publisherMore } from "@/data_models/publishers";
import Image from "next/image";
import Link from "next/link";

function Publications() {
  const title = "PUBLICATIONS";
  const description =
    "These publications are focused on energy research and aims to contribute to the discourse on sustainable energy solutions, advancements in renewable energy technologies, and the challenges facing the energy sector.";
  return (
    <main>
      <IdenticalHero
        title={title}
        description={description}
        HeroImg={heroImg}
      />
      <br />
      <br />
      <div className="w-[90%] my-0 mx-auto">
        <div>
          <p className="ptag font-bold">
            Tonipash Sustainable Energy Talks(TSET) - Reports
          </p>
          <br />

          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {publisherInfo.map((card, index) => (
              <div
                key={index}
                className="bg-cardbg flex justify-between py-2 px-4"
              >
                <div className="flex items-center gap-2">
                  <Image src={card.icon} alt="book icon" />
                  <p className="font-bold text-sm">{card.text}</p>
                </div>
                <Link
                  href={card.link}
                  className="flex items-end justify-between text-redtext underline text-[12px]"
                >
                  <p>Download</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <br />
        <br />

        <div>
          <p className="ptag font-bold">
            Africa International Conference on Clean Energy and Energy Storage
            (AICCEES) - Abstracts & Full Paper
          </p>
          <br />

          <div className="grid grid-cols-4 gap-x-4 ">
            {publisherMore.map((card, index) => (
              <div className="bxshadow py-2 px-3 relative">
                <div key={index} className=" flex justify-end ">
                  <div className="flex bg-cardbg rounded-full gap-2 py-1 px-2">
                    <Image src={card.color} className="w-4" />
                    <p className="text-[12px]">{card.text}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <Image src={card.icon} />
                  <p>{card.description}</p>
                  <p className="ptag text-[12px] mt-3">{card.writer}</p>
                </div>
                <br />
                {/* <br /> */}
                <Link
                  href={card.link}
                  className="absolute right-2 bottom-1 text-redtext underline text-[12px]"
                >
                  <p>Download</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}

export default Publications;
