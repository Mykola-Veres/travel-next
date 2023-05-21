import { FC, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import HeaderLinkPages from "./LinkPages";
import CompanyLogo from "./Logo";

const Header: FC = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-blue-100 opacity-90 font-bold text-2xl px-2">
        <CompanyLogo />
        <nav className="flex">
          <div className="flex flex-col items-center justify-center text-base md:flex-row">
            <ScrollLink
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onSetActive={handleSetActive}
              className={`${
                activeLink === "section1" ? "active" : ""
              } py-4 mr-4 cursor-pointer hover:shadow-xl md:mr-6 md:py-6`}
            >
              First Section
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
              className={`${
                activeLink === "section2" ? "active" : ""
              } py-4 mr-4 cursor-pointer hover:shadow-xl md:mr-6 md:py-6`}
            >
              Second Section
            </ScrollLink>
          </div>
          <HeaderLinkPages />
        </nav>
      </header>
    </>
  );
};

export default Header;
