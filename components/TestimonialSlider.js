// testimonial data
const testimonialData = [
  {
    image: "/hojjat.jpg",
    name: "Mohammad Hojjat Mahdavi",
    position: "Customer",
    message:
      "Working with Poorya Khoshbin has been a game-changer for my business. Their expertise and professionalism have helped us achieve remarkable results.",
  },
  {
    image: "/moheb.jpg",
    name: "Mohebullah Yousofi",
    position: "Customer",
    message:
      "I highly recommend Poorya Khoshbin for anyone seeking top-notch services. Their innovative solutions and commitment to excellence set them apart from the rest.",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// icons
import { FaQuoteLeft } from "react-icons/fa";

// image
import Image from "next/image";

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import required modules
import { Navigation, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[550px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center md:flex-row md:h-full pb-[100px] px-7">
              {/* avatar name position */}
              <div
                className="w-full max-w-[300px] flex flex-col xl:justify-center items-center
              relative mx-auto xl:mx-0"
              >
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div
                className="flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative 
              xl:pl-20 px-6 py-6"
              >
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="tex-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
