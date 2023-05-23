import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const HeaderLinkPages: FC = () => {
  const { pathname } = useRouter();
  const isActive = pathname === "/";
  return (
    <ul className="flex flex-col items-center justify-center text-sm md:text-base md:flex-row ">
      <li className="sm:mb-4 md:mb-0">
        <NextLink
          href="/"
          className={`${
            isActive ? "text-blue-600" : ""
          } hover:shadow-2xl md:mr-5 md:py-6 transition duration-0 hover:duration-300 rounded-lg`}
        >
          Home pages
        </NextLink>
      </li>
      <li>
        <NextLink
          href="/contacts"
          className={`${
            isActive ? "" : "text-blue-600"
          }  hover:shadow-2xl md:py-6 transition duration-0 hover:duration-300 rounded-lg`}
        >
          Contacts pages
        </NextLink>
      </li>
    </ul>
  );
};

export default HeaderLinkPages;
