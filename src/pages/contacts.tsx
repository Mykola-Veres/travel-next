import { Volkhov } from "next/font/google";

import Layout from "@/components/Layout/layout";
import ContactsPage from "@/screens/ContactsPage";

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Contacts() {
  return (
    <Layout>
      <main className={`${volkhov.className}`}>
        <ContactsPage />
      </main>
    </Layout>
  );
}

export default Contacts;
