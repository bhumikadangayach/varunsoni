import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { startTransition } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

function Moving() {
  return (
    <div className="max-w-6xl mx-auto my-8">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        speed={4000} // controls how smooth/slow it moves
        autoplay={{
          delay: 0, // 🔥 no delay between slides
          disableOnInteraction: false,
        }}
        grabCursor={false}
        allowTouchMove={false} // optional: disable manual swipe
      >
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/H4ZJfIDdQT4noqfA2bSSvFCiSkU.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/vSH78UNazS3h66TypvW0LidfM.png
            "
            alt="DZap"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/rXhyb4i05z50Qbk5revb3mrdsTI.png?scale-down-to=1024
            "
            alt="BitcoinVerse"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/MOWmtVvtLFL2bgsGuAvZWNKdE.png?scale-down-to=1024
            "
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/zBZ8QyhcE59BmBmbScyGq3lBuk.png?scale-down-to=1024
            "
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/zBZ8QyhcE59BmBmbScyGq3lBuk.png?scale-down-to=1024
            "
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/2NuOsTYiTf2CddOUviT3h2vk0.png?scale-down-to=1024
            "
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="
            "
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/2NuOsTYiTf2CddOUviT3h2vk0.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/byUB51XSTMFOLwtTURvdmISp7cE.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/YlOsoVhOKCFGahsjZ6kfSPJH8.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/5OWbO0qKhi8zoy1LdSAeY63NCrA.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Moving;
