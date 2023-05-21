import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const HeaderLinkPages: FC = () => {
  const { pathname } = useRouter();
  const isActive = pathname === "/";
  return (
    <div className="flex flex-col items-center justify-center text-base md:flex-row ">
      <NextLink
        href="/"
        className={`${
          isActive ? "text-blue-500" : ""
        } py-4 mr-4 hover:shadow-2xl md:mr-5 md:py-6`}
      >
        Home pages
      </NextLink>
      <NextLink
        href="/contacts"
        className={`${
          isActive ? "" : "text-blue-500"
        } py-4 hover:shadow-2xl md:py-6`}
      >
        Contacts pages
      </NextLink>
    </div>
  );
};

export default HeaderLinkPages;
