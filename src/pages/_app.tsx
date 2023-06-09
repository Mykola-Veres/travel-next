import "normalize.css/normalize.css";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Layout from "../components/Layout/layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default App;
