import { Volkhov } from "next/font/google";
import { Toaster } from "react-hot-toast";

// import Layout from "@/components/Layout/Layout";
import ContactsPage from "@/screens/ContactsPage";

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Contacts() {
  return (
    <main className={`${volkhov.className}`}>
      <Toaster position="top-center" reverseOrder={false} />
      <ContactsPage />
    </main>
  );
}

export default Contacts;
