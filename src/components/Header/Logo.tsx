import { FC } from "react";
import NextLink from "next/link";

import Logo from "../../assets/Logo.svg";

const CompanyLogo: FC = () => (
  <NextLink href="/" className="py-6 mr-4 md:mr-6">
    <Logo />
  </NextLink>
);

export default CompanyLogo;
