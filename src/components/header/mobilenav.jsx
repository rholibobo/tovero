import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useNavigationContext } from "@/context/navContext";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import CustomButton from "../button/button";

function MobileNavBar({closeNav}) {
  const { isActive, swiperRef, handleSwiperSlideChange } =
    useNavigationContext();
  const [showServDropdown, setServShowDropdown] = useState(false);
  const [showConDropdown, setConShowDropdown] = useState(false);
  // const headerRef = useRef(null);
  const pathname = usePathname();

  // const handleClickOutside = (event) => {
  //   if (headerRef.current && !headerRef.current.contains(event.target)) {
  //     setServShowDropdown(false);
  //     setConShowDropdown(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);
  useEffect(() => {
    if (pathname === "/services") {
      window.scrollTo({ top: 580, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="text-primarytext pb-4">
      <div onClick={closeNav} className="mb-8">
        <div
          onClick={() => {
            setServShowDropdown(!showServDropdown);
            setConShowDropdown(false);
          }}
          className="flex items-center gap-[2px] cursor-pointer mb-4"
        >
          <p>Services</p>
          <ChevronDown size={15} />
        </div>

        <div className={`${showServDropdown ? "block" : "hidden"} pl-4`}>
          <div
            onClick={() => {
              isActive(0);
              router.push("/services");
              // handleSlide(0);
            }}
            className="mb-4"
          >
            <p>Energy Planning & Audit</p>
          </div>
          <div
            onClick={() => {
              isActive(1);
              router.push("/services");
              // handleSlide(0);
            }}
            className="mb-4"
          >
            <p>Energy Advisory</p>
          </div>
          <div
            onClick={() => {
              isActive(2);
              router.push("/services");
              // handleSlide(0);
            }}
            className="mb-4"
          >
            <p>Mini-grid Design</p>
          </div>
          <div
            onClick={() => {
              isActive(3);
              router.push("/services");
              // handleSlide(0);
            }}
            className="mb-4"
          >
            <p>Clean Cooking Solutions</p>
          </div>
          <div
            onClick={() => {
              isActive(4);
              router.push("/services");
              // handleSlide(0);
            }}
            className="mb-4"
          >
            <p>Energy Systems Design & Development</p>
          </div>
          <div
            onClick={() => {
              isActive(5);
              router.push("/services");
              // handleSlide(0);
            }}
            className="mb-4"
          >
            <p>Energy Education & Advocacy</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div
          onClick={() => {
            setConShowDropdown(!showConDropdown);
            setServShowDropdown(false);
          }}
          className="flex items-center gap-[2px] cursor-pointer mb-4"
        >
          <p>Conferences</p>
          <ChevronDown size={15} />
        </div>
        <div className={`${showConDropdown ? "block" : "hidden"} pl-4`}>
          <div className="mb-4">
            <Link href="/aiccess">
              <p>
                Africa International Conference on Clean Energy and Energy
                Storage (AICCEES){" "}
              </p>
            </Link>
          </div>

          <div className="mb-4">
            <Link href="/tovero">
              <p>Tovero Sustainable Talk (TSET) </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <Link href="/publications">
          <p>Publications</p>
        </Link>
      </div>

      <Link href="/solutions" className="mb-8">
        <p>Solutions</p>
      </Link>
      <br />

      <Link href="/contact-us">
        <CustomButton variant="secondary">CONTACT US</CustomButton>
      </Link>
    </div>
  );
}

export default MobileNavBar;
