import Image from 'next/image';
import bonus from "../../../public/images/aicess/bonus2.png"

const StudentBonus = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center p-8">
      {/* Flyer Image */}
      <div className="w-full lg:w-4/5 flex justify-center">
        <Image
          src={bonus} 
          alt="Pro-Bonus Student Pack Flyer"
        //   width={500} // Adjust width and height as needed
        //   height={600}
          className="rounded shadow-md"
        />
      </div>

      {/* Details Section */}
     
    </div>
  );
};

export default StudentBonus;
