import recognizingBg from "../assets/images/intro.png";
import ContactIcons from "./ContactIcons";

import DownloadCv from "./DownloadCv";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";
const IntoducingComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={` container flex flex-col md:flex-row  ${
          theme === "light" ? "  text-lightTheme" : " text-darkTheme"
        } `}
      >
        <div className=" animate-fade-in-left flex flex-col items-center justify-center mt-5 md:items-start ">
          <h1 className="mb-4 text-7xl font-bold">
            HI{" "}
            <span className="animate-waving-hand text-5xl inline-block">
              👋🏻
            </span>
          </h1>
          <h2 className="mb-4 text-5xl font-bold"> I AM Heba</h2>

          <h2 className="mb-4 text-2xl font-semibold">
            A Full-Stack Web Developer{" "}
          </h2>
          <h4 className="mb-6 text-xl font-semibold">MERN</h4>
          <ContactIcons />
          <div className="mb-3 md:mb-0">
            <DownloadCv />
          </div>
        </div>
        <img
          src={recognizingBg}
          alt="intro-BG"
          className=" animate-fade-in-right sm:h-[84vh] md:w-[60vw] "
        />
      </div>
    </>
  );
};

export default IntoducingComponent;
