import { Volkhov } from "next/font/google";

// import Layout from "@/components/Layout/Layout";
import HomePage from "@/screens/HomePage";

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Home() {
  return (
    <main className={`${volkhov.className} px-3`}>
      <HomePage />
    </main>
  );
}

export default Home;
