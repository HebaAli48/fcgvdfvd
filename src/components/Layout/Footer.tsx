import React from "react";
import ContactIcons from "../ContactIcons";
import NavBar from "./NavBar";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer footer-center py-5  mt-20 border-t-[3px] flex flex-col gap-3 ">
      {/* <div className="flex gap-10 justify-center items-center ">
        <span className="link link-hover">
          <Link to="/about">About </Link>{" "}
        </span>
        <span className="link link-hover">
          <Link to="/contact-Me">Contact</Link>
        </span>
        <span className="link link-hover">
          {" "}
          <Link to="/projects">Projects</Link>{" "}
        </span>
      </div> */}
      <ul className="flex flex-col xs:flex-row justify-center space-x-3 md:space-x-8 items-center w-4/5 m-auto text-lg">
        <NavBar />
      </ul>
      <div className="text-6xl text-center text-btn-primary ">Follow me</div>
      <div className="flex  justify-center items-center">
        <ContactIcons />
      </div>

      <div
        className={`text-center${
          theme === "light" ? " text-lightTheme" : " text-darkTheme"
        }`}
      >
        <p>© 2023 Vite - React - Ts & Tailwind CSS Heba's Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
