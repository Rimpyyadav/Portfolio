import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilpic from "../assets/profilepic.jpg";
import aboutpic from "../assets/about.jpg"
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className=" pt-24 border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-Full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Rimpy Yadav
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-pink-500 text-4xl "
            >
              {" "}
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-tranparent"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center"> 
      <motion.img
      initial={{x:100, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1, delay:1.2}}
      src={aboutpic} style={{ height: '500px' , width: '500px' }}
      alt=""
      ></motion.img>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
