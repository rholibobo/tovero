import mecs from "../../../public/images/home/mecs_high_res.png";
import asteven from "../../../public/images/home/asteven_high_res.png";
import enerpro from "../../../public/images/home/enerpro-removebg.png";
import trans from "../../../public/images/home/trans-removebg.png";
import uniport from "../../../public/images/home/uniport-removebg_2.png";

// //// SWIPER IMPORTS /////// //
import { Pagination, Scrollbar, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";

const sponsors_list = [
  { id: 1, image: mecs },
  { id: 2, image: asteven },
  { id: 3, image: enerpro },
  { id: 4, image: trans },
  { id: 5, image: uniport },
];

function SponsorsCarousel() {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, Navigation, Autoplay]}
      //   slidesPerView={3}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      
    >
      {sponsors_list.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            // backgroundColor: "red"
          }}
        >
          <Image
            src={item.image}
            alt={`sponsor image ${item.id}`}
            className="w-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SponsorsCarousel;
