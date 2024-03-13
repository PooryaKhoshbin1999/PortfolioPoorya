// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary h-full flex justify-center hd:px-[3rem] fk:px-[15rem] xl:px-0 pt-9 md:pt-0">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            className="h1 fk:text-[7rem]"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transformation Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 fk:text-[1.5rem] text-secondary"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            officiis repellendus earum similique iure rem. Corrupti aliquam
            temporibus quidem ut?
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0 ">
        {/* bg image */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full  h-full
        absolute mix-blend-color-dodge"
        ></div>

        {/* particles */}
        <ParticlesContainer />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lg:w-[450px] lg:h-[550px] fk:w-[900px] fk:h-[900px] absolute bottom-0 right-[10%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};
//fk:w-[1100px] lg:w-[600px] xl:w-[800px]  absolute -bottom-32 lg:bottom-0 lg:right-[8%]
export default Home;
