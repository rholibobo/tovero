import { aicess, tovero } from "@/data_models/conferences";
import Image from "next/image";

export function ConferencesInfo({ title, paragraph1, paragraph2 }) {
  return (
    <div>
      <h1 className="text-4xl font-header">{title}</h1>
      <br />
      <p className="ptag text-justify">{paragraph1}</p>
      <br />
      <p className="ptag text-justify">{paragraph2}</p>
    </div>
  );
}

export function ConferenceStatsAicess() {
  return (
    <div className="w-[35%] grid grid-cols-2">
      {aicess["aicessStats"].map((item, index) => (
        <div key={item.id} className="flex flex-col justify-end items-center gap-2">
          <Image src={item.logo} />
          <h1 className="text-2xl font-bold">{item.number}</h1>
          <p className="text-[12px] text-primarytext">{item.description}</p>
          
        </div>
      ))}
    </div>
  );
}
export function ConferenceStatsTovero() {
  return (
    <div className="w-[35%] grid grid-cols-2">
      {tovero["toveroStats"].map((item, index) => (
        <div key={item.id} className="flex flex-col justify-end items-center gap-2">
          <Image src={item.logo} />
          <h1 className="text-2xl font-bold">{item.number}</h1>
          <p className="text-[12px] text-primarytext">{item.description}</p>
          
        </div>
      ))}
    </div>
  );
}


