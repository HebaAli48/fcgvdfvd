import React, { useContext } from "react";
import ContactIcons from "./ContactIcons";
import DownloadCv from "./DownloadCv";
import { ThemeContext } from "../utils/ThemeContext";
import recognizingBg from "../assets/images/intro.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IntoducingComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const themeStyle = theme === "light" ? "text-lightTheme" : "text-darkTheme";
  const [refIntroduce, inViewIntroduce] = useInView({
    threshold: 0.5,
  });
  const [refImage, inViewImage] = useInView({
    threshold: 0.2,
  });
  return (
    <div className="container flex flex-col md:flex-row">
      <motion.div
        ref={refIntroduce}
        initial={{ opacity: 0, x: -50 }} // Initial position and opacity for h2 (move from the left and be hidden).
        animate={
          inViewIntroduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
        } // Animate when in view.
        exit={{ opacity: 0, y: -50 }} // Animate when exiting view.
        transition={{ duration: 1 }}
      >
        <div className=" flex flex-col items-center justify-center mt-5 md:items-start">
          <h1 className={`mb-4 text-7xl font-bold ${themeStyle}`}>
            HI{" "}
            <span className="animate-waving-hand text-5xl inline-block">
              👋🏻
            </span>
          </h1>
          <h2 className={`mb-4 text-5xl font-bold ${themeStyle}`}>I AM Heba</h2>
          <h2
            className={`mb-4 text-xl sm:text-2xl font-semibold ${themeStyle}`}
          >
            A Full-Stack Web Developer{" "}
          </h2>
          <h4 className={`mb-6 text-xl font-semibold ${themeStyle}`}>MERN</h4>
          <ContactIcons />
          <div className="mb-3 md:mb-0">
            <DownloadCv />
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={refImage}
        initial={{ opacity: 0, x: 50 }}
        animate={inViewImage ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animate when in view.
        exit={{ opacity: 0, x: 50 }} // Animate when exiting view.
        transition={{ duration: 1 }}
      >
        <img
          src={recognizingBg}
          alt="intro-BG"
          className=" sm:h-[84vh] md:w-[60vw]"
        />
      </motion.div>
    </div>
  );
};

export default IntoducingComponent;
