
import Image from 'next/image'


const KeynoteSpeakerCard = ({ picture, name, description1, description2 }) => {
    return (
        <div className="shadow rounded-md bg-green-100 text-green-800 hover:border-white flex flex-col gap-3 lg:flex-row-reverse md:gap-6 p-4">
            <Image src={picture} alt={`Keynote speaker ${name}`} width={300} height={200} className="" />
            <div className="">
                <h5 className="font-semibold text-red-600 text-xl mb-2">{name}</h5>
                <p className="text-justify">{description1}
                    <br />
                    {description2}</p>
            </div>
        </div>

    )
}

export default KeynoteSpeakerCard