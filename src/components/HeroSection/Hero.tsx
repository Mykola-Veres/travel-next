import Image from "next/image";

import hero from "../../assets/Image.jpg";
import decorate from "../../../public/Decore.jpg";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <section
      id="section1"
      className={`flex flex-col items-center justify-between py-40`}
    >
      <div className="relative overflow-hidden w-full h-full bg-cover flex sm:flex-col md:flex-row">
        <div className="md:w-3/4">
          <p className="lg:text-4xl font-bold leading-[1.15] text-rose-400 sm:text-3xl text-center">
            Best Destinations around the world
          </p>
          <h1 className="mt-8 lg:text-7xl font-bold leading-[1.15] text-blue-950 sm:text-5xl text-center">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="mt-8 lg:text-2xl font-medium leading-[1.15] text-gray-950 sm:text-xl text-center">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="text-center mt-10 sm:mb-5">
            <Button>Find out more</Button>
          </div>
        </div>
        <div className="relative bottom-0 left-0 object-cover flex items-center justify-center bg-gradient-to-t from-white via-white">
          <Image
            src={hero}
            alt="Traveler"
            className="w-full object-cover "
            width={760}
            height={784}
            priority
          />
        </div>
        <Image
          src={decorate}
          alt="Background Image"
          fill={true}
          quality={100}
          loading="lazy"
          className="w-full object-cover z-[-1]"
        />
      </div>
    </section>
  );
}
