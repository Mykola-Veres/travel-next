import HeaderLinkPages from "../LinkPages/LinkPages";
import CompanyLogo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="mx-auto flex flex-col items-center justify-center bg-blue-300 text-xs">
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
