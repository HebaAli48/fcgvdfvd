import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";

interface NavBarProps {
  setIsCollapsed?: (value: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setIsCollapsed }) => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const path = location.pathname.split("/")[1];
  const navStyle: string = "hover:border-b-2  py-1 transition";

  return (
    <>
      {path === "contact-Me" || path === "hire-Me" ? (
        <li className="pt-4 sm:pt-0">
          <Link
            className={`${navStyle} ${
              theme === "light"
                ? "text-lightTheme hover:border-lightTheme "
                : "text-darkTheme hover:border-darkTheme "
            }`}
            to="/"
            onClick={() => {
              if (setIsCollapsed) {
                setIsCollapsed(true);
              }
            }}
          >
            Home
          </Link>
        </li>
      ) : (
        <>
          <li className="pt-4 sm:pt-0">
            <a
              className={`${navStyle} ${
                theme === "light"
                  ? "text-lightTheme hover:border-lightTheme "
                  : "text-darkTheme hover:border-darkTheme "
              }`}
              href="/#about"
            >
              About
            </a>
          </li>
          <li className="pt-4 sm:pt-0">
            <a
              className={`${navStyle} ${
                theme === "light"
                  ? "text-lightTheme hover:border-lightTheme "
                  : "text-darkTheme hover:border-darkTheme "
              }`}
              href="/#projects"
            >
              Projects
            </a>
          </li>
        </>
      )}

      <li className="pt-4 sm:pt-0">
        <NavLink
          to="/contact-Me"
          className={`${navStyle} ${
            theme === "light"
              ? "text-lightTheme hover:border-lightTheme "
              : "text-darkTheme hover:border-darkTheme "
          }`}
          onClick={() => {
            if (setIsCollapsed) {
              setIsCollapsed(true);
            }
          }}
        >
          Contact Me
        </NavLink>
      </li>
    </>
  );
};

export default NavBar;
