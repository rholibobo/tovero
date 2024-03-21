import Image from "next/image";
import svg1 from "../../../public/images/aicess/svg1.png";
import svg2 from "../../../public/images/aicess/svg2.png";
import svg3 from "../../../public/images/aicess/svg3.png";
import svg4 from "../../../public/images/aicess/svg4.png";
import svg5 from "../../../public/images/aicess/svg5.png";
import svg6 from "../../../public/images/aicess/svg6.png";
import svg7 from "../../../public/images/aicess/svg7.png";
import svg8 from "../../../public/images/aicess/svg8.png";
import svg9 from "../../../public/images/aicess/svg9.png";

const deets = [
  {
    image: svg1,
    text: "Energy Supply & Energy Access in Africa",
  },
  {
    image: svg2,
    text: "Hydrogen Development in Africa",
  },
  {
    image: svg3,
    text: "Energy Storage and Sustainable Battery Manufacturing in Africa",
  },
  {
    image: svg4,
    text: "Renewable Energy Systems",
  },
  {
    image: svg5,
    text: "Mini - grids & Hydropower Development",
  },
  {
    image: svg6,
    text: "Clean Cooking",
  },
  {
    image: svg7,
    text: "Clean Mobility",
  },
  {
    image: svg8,
    text: "Energy Transition Finance",
  },
  {
    image: svg1,
    text: "Waste to Energy",
  },
  {
    image: svg9,
    text: "Energy Efficiency & Smart Systems",
  },
];

function DetailsItemized() {
  return (
    <div>
      <div className="w-[70%]">
        <h1 className="text-prigreentext text-3xl font-extrabold">AICCEES 2024</h1>
        <br />
        <p className="ptag">
          The scope of the conference is both contemporary and original
          research, innovative solutions for the clean energy sector, and energy
          storage systems. The conference will feature 10 topics as follows;
        </p>
      </div>
      <br />

      <div className="grid grid-cols-3 gap-y-7 gap-x-5">
        {deets.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bxshadow h-16 py-4 pl-4"
          >
            <Image src={card.image} />
            <p className="font-bold text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsItemized;
