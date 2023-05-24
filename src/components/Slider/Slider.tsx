import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

const images = [
  { id: "1324", src: "/train.jpg", name: "train" },
  { id: "2324", src: "/borabora.jpg", name: "borabora" },
  { id: "3234", src: "/houses.jpg", name: "houses" },
  { id: "4234", src: "/architecture.jpg", name: "architecture" },
];

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        spaceBetween={5}
        slidesPerView={1}
        modules={[Navigation]}
        className="h-[205px] md:h-[330px] w-[310px] md:w-[500px] flex items-center justify-center"
      >
        <ul>
          {images.map((path) => (
            <li key={path.id}>
              <SwiperSlide
                key={path.id}
                className="my-auto rounded-lg overflow-hidden"
              >
                <Image
                  src={path.src}
                  alt={path.name}
                  width={640}
                  height={464}
                  loading="lazy"
                  className="object-cover w-full"
                />
              </SwiperSlide>
            </li>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};

export default Slider;
