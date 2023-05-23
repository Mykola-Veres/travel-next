import { Volkhov } from "next/font/google";

import Layout from "@/components/Layout/layout";
import HomePage from "@/screens/HomePage";

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Home() {
  return (
    <Layout>
      <main className={`${volkhov.className} px-3`}>
        <HomePage />
      </main>
    </Layout>
  );
}

export default Home;
