import Plane from "../../assets/plane.svg";

import ContactForm from "../Form/ContactForm";

function ContactsSection() {
  return (
    <section className={`px-2 pb-40`}>
      <div className="flex flex-col items-center justify-between">
        <div id="section1" className="pt-40">
          <p className="lg:text-4xl font-bold leading-[1.15] text-rose-400 sm:text-3xl text-center">
            Easy and Fast
          </p>
          <h1 className="mt-8 lg:text-7xl font-bold leading-[1.15] text-blue-950 sm:text-5xl text-center">
            Book your next trip in one easy steps
          </h1>
          <p className="mt-8 lg:text-2xl font-medium leading-[1.15] text-gray-950 sm:text-xl text-center">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </p>
          <div className="flex justify-center mb-5">
            <Plane aria-label="Plane" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactsSection;
