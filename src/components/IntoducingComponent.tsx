import React, { useContext } from "react";
import ContactIcons from "./ContactIcons";
import DownloadCv from "./DownloadCv";
import { ThemeContext } from "../utils/ThemeContext";
import recognizingBg from "../assets/images/intro.png";

const IntoducingComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const themeStyle = theme === "light" ? "text-lightTheme" : "text-darkTheme";

  return (
    <div className="container flex flex-col md:flex-row">
      <div className="animate-fade-in-left flex flex-col items-center justify-center mt-5 md:items-start">
        <h1 className={`mb-4 text-7xl font-bold ${themeStyle}`}>
          HI{" "}
          <span className="animate-waving-hand text-5xl inline-block">👋🏻</span>
        </h1>
        <h2 className={`mb-4 text-5xl font-bold ${themeStyle}`}>I AM Heba</h2>
        <h2 className={`mb-4 text-xl sm:text-2xl font-semibold ${themeStyle}`}>
          A Full-Stack Web Developer{" "}
        </h2>
        <h4 className={`mb-6 text-xl font-semibold ${themeStyle}`}>MERN</h4>
        <ContactIcons />
        <div className="mb-3 md:mb-0">
          <DownloadCv />
        </div>
      </div>
      <img
        src={recognizingBg}
        alt="intro-BG"
        className="animate-fade-in-right sm:h-[84vh] md:w-[60vw]"
      />
    </div>
  );
};

export default IntoducingComponent;
