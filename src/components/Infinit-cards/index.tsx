import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

export function Carousel({ items }: { items?: any[] }) {
  return (
    <>
      <Swiper
        spaceBetween={16}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={50000}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {items?.map((item, index) => (
            <div key={index} className="card" style={{ flex: "1 0 auto" }}>
              {item.icon}
              {item.title}
            </div>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {items?.map((item, index) => (
            <div key={index} className="card" style={{ flex: "1 0 auto" }}>
              {item.icon}
              {item.title}
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
