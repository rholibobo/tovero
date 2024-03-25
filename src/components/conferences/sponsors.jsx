import Image from "next/image";
import Scientific from "../../../public/images/aicess/Scientific.png";
import redarrow from "../../../public/images/aicess/redarrow.png";
import Link from "next/link";

function Sponsors() {
  const links = [
    {
      id: 1,
      header: "YOUTUBE",
      link: "https://www.youtube.com/@toveroenergy3932/streams",
    },
    {
      id: 2,
      header: "PROCEEDINGS",
      link: "https://www.scientific.net/book/africa-international-conference-on-clean-energy-and-energy-storage/978-3-0357-3771-4",
    },
    {
      id: 3,
      header: "ABSTRACTS",
      link: "https://drive.google.com/uc?export=download&id=1lE93VeauJnyykfAe1ogiYFDLHE_V4KDD",
    },
  ];
  return (
    <div className="w-[80%] flex justify-between gap-6">
      <div className="w-[50%] bg-cardbg flex justify-between items-center px-8 py-6">
        <h1 className="font-aicess text-[#651E00] text-2xl">Publisher</h1>

        <div>
          <Image src={Scientific} alt="scientific" />
          <p className="text-[#006547] text-center font-bold">
            (Indexed in Scopus)
          </p>
        </div>
      </div>
      <div className="w-[50%] bg-cardbg p-6">
        <h1 className="font-header text-center font-bold text-2xl">
          AICESS 2023
        </h1>
        <p className="ptag text-center text-sm">
          Gain access to AICCEES 2023 conference
        </p>
        <br />
        {/* <br /> */}
        <div className="flex justify-between">
          {links.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Link
                href={item.link}
                className="text-[12px] font-bold text-[#C10000] underline"
              >
                <p className="">{item.header} </p>
              </Link>
              <Image src={redarrow} alt="" width={12} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
