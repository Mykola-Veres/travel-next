import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Image from "next/image";
import roma from "../../assets/Roma.jpg";
import europe from "../../assets/Europe.jpg";
import london from "../../assets/Lomdon.jpg";
import greece from "../../assets/Greece.jpg";

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        spaceBetween={5}
        slidesPerView={1}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Image
            src={europe}
            alt="Europe"
            width={310}
            height={450}
            className="object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={london}
            alt="London"
            width={310}
            height={450}
            className="object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={roma}
            alt="Roma"
            width={310}
            height={450}
            className="object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={greece}
            alt="Greece"
            width={310}
            height={160}
            className="object-cover w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
