import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sliderImage } from "../assets/sliderImage";
import { Autoplay } from "swiper/modules";

export const Imageslider = () => {
  return (
    <div className="p-4 md:pb-0 md:mb-9  md:max-w-6xl md:flex md:items-center md:justify-between md:text-center md:mx-auto ">
      <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true} 
        spaceBetween={50}
        slidesPerView={1}
        
      >
        <SwiperSlide className="">
          <img src={sliderImage.feature1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage.feature9} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
