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
      >
        <ul>
          {images.map((path) => (
            <li key={path.id}>
              <SwiperSlide key={path.id} className="my-auto rounded-md">
                <Image
                  src={path.src}
                  alt={path.name}
                  width={300}
                  height={300}
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
