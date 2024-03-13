// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          link: "https://pooryakhoshbin1999.github.io/gpt3__jsm/"
        },
        {
          title: "title",
          path: "/thumb2.png",
          link: "https://pooryakhoshbin1999.github.io/modern_bank_app/"
        },
        {
          title: "title",
          path: "/thumb3.png",
          link: "https://pooryakhoshbin1999.github.io/gerich-restaurant/"
        },
        {
          title: "title",
          path: "/thumb4.png",
          link: "https://pooryakhoshbin1999.github.io/60walleper/"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.png",
          link: "https://pooryakhoshbin1999.github.io/60walleper/"
        },
        {
          title: "title",
          path: "/thumb1.png",
          link: "https://pooryakhoshbin1999.github.io/gpt3__jsm/"
        },
        {
          title: "title",
          path: "/thumb2.png",
          link: "https://pooryakhoshbin1999.github.io/modern_bank_app/"
        },
        {
          title: "title",
          path: "/thumb3.png",
          link: "https://pooryakhoshbin1999.github.io/gerich-restaurant/"
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// icons
import { BsArrowRight } from "react-icons/bs";

// image
import Image from "next/image";

//link
import Link from "next/link";

// import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] md:h-[420px] lg:h-[450px] xl:h-[500px] fk:h-[700px] xl:mb-[100px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.link}
                    key={index}
                    className="relative rounded-lg overflow-hidden flex 
                  items-center justify-center group"
                  >
                    <div className="flex justify-center items-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-secondary
                      to-accent opacity-0 group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      {/* title  */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                      group-hover:xl:-translate-y-20 transition-all duration-300 text-primary font-bold">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all 
                          duration-300 delay-150"
                          >PROJECT</div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all
                          duration-300 delay-200">
                            <BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
