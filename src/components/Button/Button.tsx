import { FC, PropsWithChildren } from "react";
import NextLink from "next/link";

const Button: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="text-center mt-10 sm:mb-5">
      <NextLink
        href="/contacts"
        className="rounded-lg border-transparent px-5 py-4 transition-colors bg-yellow-500 text-white hover:border-gray-300 hover:bg-green-500"
      >
        {children}
      </NextLink>
    </div>
  );
};

export default Button;
