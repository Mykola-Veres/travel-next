import { FC, PropsWithChildren } from "react";
import Header from "../Header/Header";
import Head from "next/head";
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
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
