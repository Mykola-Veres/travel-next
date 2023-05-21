import { Volkhov } from "next/font/google";

import Layout from "@/components/Layout/layout";
import HomePage from "@/components/Screens/HomePage";

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <main className={`${volkhov.className} px-6`}>
        <HomePage />
      </main>
    </Layout>
  );
}
