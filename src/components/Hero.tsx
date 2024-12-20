import { motion } from "framer-motion";
import profile from "../assets/IMG_8004.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-9 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className=" flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profile}
            alt="profile"
            className="w-[200px] cursor-pointer rounded-3xl shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-indigo-600 md:w-[260px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: +50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px]  flex-col items-center justify-center gap-3 text-center"
        >
          <h1
            className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent opacity-100 text-4xl font-semibold transition-all duration-300 sm:text-7xl cursor-default"
            style={{
              backgroundSize: "300% 300%",
              animation: "gradient-animation 2s ease infinite",
            }}
          >
            Nusair Tasin
            <style>
              {`
                    @keyframes gradient-animation {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}
            </style>
          </h1>
          <h3 className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent opacity-85 hover:opacity-100 text-2xl transition-all duration-300 md:text-3xl cursor-default">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
          Hi, I'm Nusair Tasin, a passionate problem solver and web developer, currently pursuing my degree in Computer Science and Engineering at Bangladesh University of Professionals (BUP). I’m currently deepening my expertise in Data Structures & Algorithms and Backend development.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
