import HeaderLinkPages from "../Header/LinkPages";
import CompanyLogo from "../Header/Logo";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-blue-300 text-xs px-2">
      <div className="flex">
        <div className="flex flex-col">
          <CompanyLogo />
          <p className="text-sm w-[180px] mb-2">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center font-bold text-2xl ml-5 md:ml-11">
          <HeaderLinkPages />
        </div>
      </div>
      <p className="mb-4">All rights reserved@jadoo.co</p>
    </footer>
  );
}

export default Footer;
