import IdenticalHero from "@/components/hero/hero";
import heroImg from "../../../public/images/publishers/publishers_hero.png";
import { solutionsData } from "@/data_models/solutions";
import Image from "next/image";
import CustomButton from "@/components/button/button";

function Solutions() {
  const title = "SOLUTIONS";
  const description =
    "By embracing innovation and collaboration, we're working to create a more sustainable future for all. Join us on our journey to a brighter, cleaner, and more sustainable tomorrow. Together, we can harness the power of energy solutions to build a better world for generations to come.";
  return (
    <main>
      <IdenticalHero
        title={title}
        description={description}
        HeroImg={heroImg}
      />
      <br />
      <div className="w-[90%] my-0 mx-auto">
        <div className="bg-cardbg flex justify-between items-center gap-2 py-8 px-4 mb-4">
          <div className="w-[20%] text-prigreentext font-header border-r border-r-prigreentext font-extrabold text-2xl">
            <h1>CLEAN COOKING</h1>
            <h1>SOLUTIONS</h1>
          </div>
          <div className="w-[80%]">
            <p className="ptag">
              Our clean cooking solutions offer environmentally friendly and
              efficient alternatives to traditional cooking methods, promoting
              healthier cooking practices and reducing environmental impact. We
              offer a range of options to suit different needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 h-auto">
          {solutionsData.map((card, index) => (
            <div className="relative bxshadow rounded-md">
              <Image src={card.image} alt={`solutions ${card.title}`} className="rounded-t-md" />
              <div className="flex flex-col justify-between py-4 px-6 ">
                <div className="h-[17rem]">
                  <h1 className="text-xl font-bold text-prigreentext">{card.title}</h1>
                  <p className="ptag text-sm">{card.description}</p>
                </div>
                <br />
                {/* <br /> */}
                <CustomButton className="absolute bottom-4">
                  REQUEST FOR PURCHASE
                </CustomButton>
              </div>
              
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}

export default Solutions;
