import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useNavigationContext } from "@/context/navContext";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../button/button";

function MobileNavBar() {
  const { isActive, swiperRef, handleSwiperSlideChange } =
    useNavigationContext();
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

  return (
    <div className="text-primarytext pb-4">
      <div>
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
          <div className="mb-2">
            <p>Energy Planning & Audit</p>
          </div>
          <div className="mb-2">
            <p>Energy Advisory</p>
          </div>
          <div className="mb-2">
            <p>Mini-grid Design</p>
          </div>
          <div className="mb-2">
            <p>Clean Cooking Solutions</p>
          </div>
          <div className="mb-2">
            <p>Energy Systems Design & Development</p>
          </div>
          <div className="mb-2">
            <p>Energy Education & Advocacy</p>
          </div>
        </div>
      </div>

      <div>
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
          <div className="mb-2">
            <Link href="/aiccess">
              <p>
                Africa International Conference on Clean Energy and Energy
                Storage (AICCEES){" "}
              </p>
            </Link>
          </div>

          <div className="mb-2">
            <Link href="/tovero">
              <p>Tovero Sustainable Talk (TSET) </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <Link href="/publications">
          <p>Publications</p>
        </Link>
      </div>

      <Link href="/solutions" className="mb-4">
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
