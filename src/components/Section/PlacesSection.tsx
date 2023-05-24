import Plane from "../../assets/plane.svg";
import Slider from "../Slider/Slider";

function Placces() {
  return (
    <section
      id="section2"
      className={`flex flex-col items-center justify-center py-32`}
    >
      <div>
        <div>
          <p className="lg:text-4xl font-bold leading-[1.15] text-rose-400 sm:text-3xl text-center">
            Top Selling
          </p>
          <h2 className="mt-6 lg:text-7xl font-bold leading-[1.15] text-blue-950 sm:text-5xl text-center">
            Top Destinations
          </h2>
          <p className="mt-5 lg:text-2xl font-medium leading-[1.15] text-gray-950 sm:text-xl text-center">
            We Offer Best Services
          </p>
        </div>
        <div className="relative bottom-0 left-0 flex h-48 items-center justify-center bg-gradient-to-t from-white via-white">
          <ul>
            <li className="relative h-36 w-48">
              <Plane aria-label="Plane" />
            </li>
          </ul>
        </div>
      </div>
      <Slider />
    </section>
  );
}

export default Placces;
