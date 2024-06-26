import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ads1 from "../../assets/ads1.jpeg";

import ads2 from "../../assets/ads2.png";
import ads3 from "../../assets/ads3.webp";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css/navigation";

const ads = [
  {
    id: 1,
    img: ads1,
  },
  {
    id: 2,
    img: ads2,
  },
  {
    id: 3,
    img: ads3,
  },
];

const Adverts = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // navigation={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {ads.map((ad) => (
        <SwiperSlide key={ad.id}>
          <img
            src={ad.img}
            alt={ad.id}
            className=" object-contain rounded-md lg:h-[90%] h-full w-[96%]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Adverts;
