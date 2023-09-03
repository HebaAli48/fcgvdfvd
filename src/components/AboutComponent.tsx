import React, { useContext } from "react";
import aboutImg from "../assets/images/about-img.png";
import { ThemeContext } from "../utils/ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const AboutComponent: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [refH2, inViewH2] = useInView({
    threshold: 0.5,
  });
  const [refGreeting, inViewGreeting] = useInView({
    threshold: 0.6,
  });
  const [refFront, inViewFront] = useInView({
    threshold: 0.5,
  });
  const [refBack, inViewBack] = useInView({
    threshold: 0.5,
  });
  const [refImage, inViewImage] = useInView({
    threshold: 0.2,
  });
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
            <motion.div
              ref={refH2}
              initial={{ opacity: 0, x: -50 }} // Initial position and opacity for h2 (move from the left and be hidden).
              animate={inViewH2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate when in view.
              exit={{ opacity: 0, x: -50 }} // Animate when exiting view.
              transition={{ duration: 1 }}
            >
              <h2
                className={`text-4xl sm:text-5xl font-bold italic mb-5  pl-2 w-fit  pb-2  `}
              >
                About Me
              </h2>
            </motion.div>
            <motion.div
              ref={refH2}
              initial={{ opacity: 0, y: -50 }}
              animate={inViewH2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <p
                className={`text-xl border-l-[5px] border-double pl-3 md:text-base pb-3 italic ${
                  theme === "light" ? "border-lightTheme" : "border-darkTheme"
                }`}
              >
                <q>Discover the Developer Behind the Screens</q>
              </p>
            </motion.div>
            <motion.div
              ref={refGreeting}
              initial={{ opacity: 0, y: 50 }}
              animate={
                inViewGreeting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
            >
              <p
                className={` border-l-[5px]  text-xl  font-semibold border-double pl-3 ${
                  theme === "light" ? "border-lightTheme" : "border-darkTheme"
                }`}
              >
                Greetings! I'm Heba Mohammed, your go-to Full Stack Web
                Developer with expertise in the MERN stack.My journey as a
                developer has been an exciting fusion of creativity and
                technology.
              </p>
            </motion.div>
            <motion.div
              ref={refFront}
              initial={{ opacity: 0, y: 50, x: 0 }} // Start below and not moved horizontally
              animate={
                inViewFront
                  ? { opacity: 1, y: 0, x: 0 }
                  : { opacity: 0, x: 50, y: 0 }
              } // Move up from the bottom
              exit={{ opacity: 0, x: 50, y: 0 }} // Disappear to the right
              transition={{ duration: 1 }}
            >
              <p className="pb-5  font-medium text-lg pt-5">
                On the frontend, I wield a masterful command of essential tools
                including React.js, Redux, Redux Tool Kit, Angular, Axios,
                Tailwind CSS, SaSS, BootStrap and CSS3. I'm passionate about
                sculpting seamless user experiences that captivate and engage.{" "}
              </p>
            </motion.div>
            <motion.div
              ref={refBack}
              initial={{ opacity: 0, y: 50, x: 0 }} // Start below and not moved horizontally
              animate={
                inViewBack
                  ? { opacity: 1, y: 0, x: 0 }
                  : { opacity: 0, x: 50, y: 0 }
              } // Move up from the bottom
              exit={{ opacity: 0, x: 50, y: 0 }} // Disappear to the right
              transition={{ duration: 1 }}
            >
              <p className="pb-5 font-medium text-lg">
                {" "}
                Delving into the backend , I'm well-versed in Node.js,
                Express.js, Resful Apis ,MongoDB, and Mongoose. Alongside these
                ,there are some additional packages like Cloudinary,Multer
                ,Morgan ,Jwt,.....etc.
              </p>
            </motion.div>
          </div>

          <div className="about-img">
            <motion.div
              ref={refImage}
              initial={{ scale: 0 }}
              animate={inViewImage ? { rotate: 360, scale: 1 } : { scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1,
              }}
              whileHover={{ scale: 1.1, rotate: 370 }}
              whileTap={{
                scale: 0.8,
                rotate: 350,
                borderRadius: "100%",
              }}
            >
              <img
                src={aboutImg}
                alt="coding illustration"
                className="mx-auto md:mx-0 md:ml-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
