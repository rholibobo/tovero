import Image from "next/image";

function IdenticalHero({title, description, HeroImg}) {
    return (
        <div className="h-screen flex justify-between relative">
        <div className="w-1/2 flex flex-col justify-center px-16 ">
          <div className="font-header text-4xl mb-2 text-prigreentext">
            <h1 className="font-header text-4xl">{title}</h1>
          </div>

          <p className="ptag text-justify mb-2">
            {description}
          </p>
        </div>
        <div className="flex justify-end">
          <Image src={HeroImg} alt="Hero Image" className="" />
        </div>
        <div className="w-[46.8%] h-5 bg-red-600 absolute bottom-0 pr-16"></div>
      </div>
    );
}

export default IdenticalHero;