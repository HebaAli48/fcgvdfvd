import React, { useContext } from "react";
import aboutImg from "../assets/images/about-img.png";
import { ThemeContext } from "../utils/ThemeContext";
const AboutComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section
        className={`px-5 pt-5 ${
          theme === "light"
            ? " bg-zinc-700 text-lightTheme"
            : "bg-zinc-300 text-darkTheme"
        }`}
        id="about"
      >
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center md:justify-between">
          <div className="about-info lg:col-span-2">
            <h2
              className={`text-4xl sm:text-5xl font-bold italic mb-5  pl-2 w-fit  pb-2  `}
            >
              About Me
            </h2>
            <p
              className={`text-xl border-l-[5px] border-double pl-3 md:text-base pb-3 italic ${
                theme === "light" ? "border-lightTheme" : "border-darkTheme"
              }`}
            >
              <q>Discover the Developer Behind the Screens</q>
            </p>
            <p
              className={` border-l-[5px]  text-xl  font-semibold border-double pl-3 ${
                theme === "light" ? "border-lightTheme" : "border-darkTheme"
              }`}
            >
              Greetings! I'm Heba Mohammed, your go-to Full Stack Web Developer
              with expertise in the MERN stack.My journey as a developer has
              been an exciting fusion of creativity and technology.
            </p>
            <p className="pb-5  font-medium text-lg pt-5">
              On the frontend, I wield a masterful command of essential tools
              including React.js, Redux, Redux Tool Kit, Angular, Axios,
              Tailwind CSS, SaSS, BootStrap and CSS3. I'm passionate about
              sculpting seamless user experiences that captivate and engage.{" "}
            </p>

            <p className="pb-5 font-medium text-lg">
              {" "}
              Delving into the backend , I'm well-versed in Node.js, Express.js,
              Resful Apis ,MongoDB, and Mongoose. Alongside these ,there are
              some additional packages like Cloudinary,Multer ,Morgan
              ,Jwt,.....etc.
            </p>
          </div>

          <div className="about-img">
            <img
              src={aboutImg}
              alt="coding illustration"
              className="mx-auto md:mx-0 md:ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
