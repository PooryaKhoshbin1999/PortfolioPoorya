// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Best UX / UI designing",
  },
  {
    icon: <RxDesktop />,
    title: "Frontend Development",
    description: "Development of web-based software with modern UI technology.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Crafting compelling narratives that captivate, persuade, and inspire audiences effortlessly.",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex sm:flex-col
            gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 h-[250px] justify-between"
            >
              <div>
                {/* icons */}
                <div className="tex-4xl text-accent mb-4">{item.icon}</div>

                {/* title & description */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent 
                transition-all duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
