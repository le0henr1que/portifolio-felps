import { useEffect } from "react";
import About from "../components/About/About";
import ContactMe from "../components/Contact-me/ContactMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Projects from "../components/Projects/Projects";
import Techs from "../components/Techs/Techs";
import { convertedStyle } from "../utils/convertedStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const screenMain = convertedStyle([
  "main-1 w-full flex justify-center flex-col items-center ",
  {
    xs: "",
    sm: "",
    md: "",
    lg: "w-full",
    xl: "w-[1200px]",
  },
]);

const defaultDiv2 = convertedStyle([
  "main-2 ",
  {
    xs: "",
    sm: "",
    md: "",
    lg: "w-full",
    xl: "w-[1200px]",
  },
]);

export default function Home() {
  return (
    <>
      <div className={screenMain}>
        <Header />
        <div className={defaultDiv2}>
          <Introduction />
          <Techs />
          <About />
          <div className="w-full mt-[72px] " id="projects">
            <div className="w-full flex justify-between items-start">
              <div className=" justify-start">
                <div className="secondary-heading-xl text-white">
                  Meus <span className="text-brand-500">Projetos</span>
                </div>
                <div className="body-regular-lg">
                  Explore essa seleção de projetos pessoais e profisisonais
                </div>
              </div>
              <div className="w-[202px]">
                <button className="btn-primary-outlined large">
                  Ver todos os projetos
                </button>
              </div>
            </div>
            <div className="swiper">
              <Swiper
                navigation
                pagination
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t solid border-solid border-[#22406C] w-full flex items-center justify-center mt-[84px]">
        <Footer />
      </div>
    </>
  );
}
