"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import hdrElipses from "../../../public/images/home/ellipse.png";
import CustomButton from "../button/button";
import Link from "next/link";
import { useNavigationContext } from "@/context/navContext";
import { useRouter } from "next/navigation";

function Header() {
  const { setActiveIndex, setSelectedIndex, swiperRef } =
    useNavigationContext();
  const router = useRouter();
  const [showServDropdown, setServShowDropdown] = useState(false);
  const [showConDropdown, setConShowDropdown] = useState(false);
  const headerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setServShowDropdown(false);
      setConShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleNav = (index) => {
    setActiveIndex(index);
    setSelectedIndex(index);
    swiperRef.current?.swiper?.slideTo(index);
    router.push("/services");
  };

  return (
    <header
      ref={headerRef}
      className="w-[90%] fixed z-50 left-1/2 -translate-x-[50%] top-4 my-0 mx-auto py-2 px-4 rounded-full bg-white shadow-lg"
    >
      <div className="flex justify-between items-center text-primarytext text-sm">
        <div className="w-1/3 flex items-center justify-between relative">
          <div
            onClick={() => {
              setServShowDropdown(!showServDropdown);
              setConShowDropdown(false);
            }}
            className="flex items-center gap-[2px] cursor-pointer "
          >
            <p>Services</p>
            <ChevronDown size={15} color="#000" />

            {
              <div
                className={`${
                  showServDropdown ? "block" : "hidden"
                } bg-white shadow-md pt-6 pb-10 px-6 absolute top-12 rounded-t-2xl`}
              >
                <div
                  onClick={() => {
                    handleNav(0);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Energy Planning & Audit
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(1);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Energy Advisory
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(2);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Mini-grid Design
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(3);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Clean Cooking Solutions
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(4);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Energy Systems Design & Development
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(5);
                  }}
                  className="w-fit group py-2 h-10"
                >
                  Energy Education & Advocacy
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>
              </div>
            }
          </div>
          <div
            onClick={() => {
              setConShowDropdown(!showConDropdown);
              setServShowDropdown(false);
            }}
            className="flex items-center gap-[2px] cursor-pointer"
          >
            <p>Conferences</p>
            <ChevronDown size={15} color="#000" />

            {
              <div
                className={`${
                  showConDropdown ? "block" : "hidden"
                } bg-white shadow-md pt-6 pb-12 px-6 absolute top-12 rounded-t-2xl `}
              >
                <div className="w-fit group h-16">
                  Africa International Conference on Clean Energy and Energy
                  Storage (AICCEES){" "}
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>
                <br />
                <div className="w-fit group h-10">
                  Tonipash Sustainable Talk (TSET){" "}
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>
                <br />
              </div>
            }
          </div>

          <p>Publications</p>
          <p>Solutions</p>
        </div>

        <Link href="/" className="flex items-center w-1/3">
          <p className="text-lg text-primarytext">
            Tovero{" "}
            <span className="text-redtext font-extrabold text-xl">Energy</span>
          </p>
          <Image src={hdrElipses} alt="header ellipses" className="-ml-6" />
        </Link>

        <CustomButton variant="primary">Contact Us</CustomButton>
      </div>
    </header>
  );
}

export default Header;
