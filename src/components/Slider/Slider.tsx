import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

const images = [
  { src: "/train.jpg", name: "train" },
  { src: "/borabora.jpg", name: "borabora" },
  { src: "/houses.jpg", name: "houses" },
  { src: "/architecture.jpg", name: "architecture" },
];

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        spaceBetween={5}
        slidesPerView={1}
        modules={[Navigation]}
      >
        <ul>
          {images.map((path) => (
            <li key={path.src}>
              <SwiperSlide className="my-auto rounded-md">
                <Image
                  src={path.src}
                  alt={path.name}
                  width={300}
                  height={300}
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
