import { FC, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import CompanyLogo from "../Logo/Logo";

const Header: FC = () => {
  const [activeLink, setActiveLink] = useState("section1");

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-blue-100 opacity-90 font-bold text-2xl px-2">
      <CompanyLogo />
      <nav className="flex">
        <ul className="flex flex-col items-center w-36 md:w-80 justify-center text-base md:flex-row">
          <li className="sm:mb-2 ">
            <ScrollLink
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              duration={400}
              onSetActive={handleSetActive}
              className={`${
                activeLink === "section1" ? "active" : ""
              } py-1 px-2 cursor-pointer hover:shadow-xl md:mr-6 md:py-6 transition duration-0 hover:duration-300 rounded-lg`}
            >
              First Section
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              duration={400}
              onSetActive={handleSetActive}
              className={`${
                activeLink === "section2" ? "active" : ""
              } py-1 px-2 cursor-pointer hover:shadow-xl md:py-6 transition duration-0 hover:duration-300 rounded-lg`}
            >
              Second Section
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
