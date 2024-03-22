import Image from "next/image";
import hdrElipses from "../../../public/images/home/ellipse.png";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-[14px] w-[90%] my-0 mx-auto">
      <div className="grid grid-cols-4 gap-x-16  text-primarytext">
        <div className="flex flex-col justify-between">
          <div className="flex">
            <div className="pt-2">
              <p className="text-2xl text-primarytext">
                Tovero{" "}
                <span className="text-redtext font-extrabold text-3xl">
                  Energy
                </span>
              </p>

              <p className="text-[10px] -mt-1 text-right font-[500]">
                Energy to power your dreams
              </p>
            </div>
            <Image src={hdrElipses} alt="header ellipses" className="-ml-6" />
          </div>

          <div>
            <div className="flex justify-between ">
              <div>
                <p className="text-[12px]">Email</p>
                <p className="text-[12px]">info@toveroenergy.com</p>
              </div>
              <div>
                <p className="text-[12px]">Phone number</p>
                <p className="text-[12px]">+2348133426978</p>
              </div>
            </div>
            <br />
            <div className="flex justify-between">
              <div className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]">
                <IoLogoLinkedin />
              </div>
              <div className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]">
                <IoLogoTwitter />
              </div>
              <div className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]">
                <IoLogoYoutube />
              </div>
              <div className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]">
                <IoLogoFacebook />
              </div>
              <div className="p-3 rounded-full bg-[#E7E7E7] border border-[#C9C9C9]">
                <IoLogoInstagram />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-Headertext font-header">
            Our Services
          </h3>
          <br />
          <Link href="#">
            <p className="mb-2">Energy Planning & Audit</p>
          </Link>
          <Link href="#">
            <p className="mb-2">Energy Advisory</p>
          </Link>
          <Link href="#">
            <p className="mb-2">Mini-grid Design</p>
          </Link>
          <Link href="#">
            <p className="mb-2">Clean Cooking Solutions</p>
          </Link>
          <Link href="#">
            <p className="mb-2">Energy System Design & Development</p>
          </Link>
          <Link href="#">
            <p className="mb-2">Energy Education & Advocacy</p>
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-bold font-header text-Headertext">
            Quick Links
          </h3>
          <br />
          <Link href="#">
            <p className="mb-2">Publications</p>
          </Link>
          <Link href="#">
            <p className="mb-2">AICCESS</p>
          </Link>
          <Link href="#">
            <p className="mb-2">TSET</p>
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-bold font-header text-Headertext">
            Location
          </h3>
          <br />

          <p className="mb-2 text-justify">
            4 Pius Chuku Street, off Eze Nvuigwe Avenue, Woji, Port Harcourt,
            Rivers State, Nigeria.
          </p>
        </div>
      </div>
        <br />
        <br />
      <hr />
      
      <div className="flex justify-between py-6">
        <p className="text-[#c0c0c0]">
          Copyright <span className="text-[#828282]">Tovero Energy Ltd. 2024</span>
        </p>
        <div className="flex justify-between gap-4 text-[#828282]">
          <Link href="#">
            <p>Terms and Conditions </p>
          </Link>
          <Link href="#">
            <p>Privacy Terms</p>
          </Link>
          <Link href="#">
            <p>Data Protection </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
