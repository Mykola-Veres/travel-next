import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Travel</title>
        <meta name="description" content="Travel around the world"></meta>
        <meta name="og:title" content="Travel"></meta>
        <meta name="og:description" content="Travel around the world"></meta>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
