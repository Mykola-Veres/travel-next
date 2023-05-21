import { Volkhov } from "next/font/google";

import Layout from "@/components/Layout/layout";
import ContactsPage from "@/components/Screens/ContactsPage";

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Contacts() {
  return (
    <Layout>
      <main className={`${volkhov.className}`}>
        <ContactsPage></ContactsPage>
      </main>
    </Layout>
  );
}
