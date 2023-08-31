import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { envelope, Dark, Light } from "../../utils/Icons";
import Button from "../../utils/Button";
import { Menu } from "../../utils/Icons";
import MyLogo from "../../utils/MyLogo";
import NavBar from "./NavBar";
import { ThemeContext } from "../../utils/ThemeContext";

const Header: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav
      className={` ${
        theme === "light" ? "text-lightTheme" : "text-darkTheme"
      } border-b ${isCollapsed ? "pb-4" : "pb-40"} pt-3 sm:pb-3`}
    >
      <div className="container">
        <div className="flex items-center relative justify-between">
          {/* logo  */}
          <Link className=" order-first " to="/">
            <MyLogo />
          </Link>

          {/* collapse button  */}
          <button
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="block items-center px-3 py-2 border rounded text-sky-600 border-sky-600 hover:text-slate-600 hover:border-slate-600 ms-2 sm:hidden order-9"
          >
            {Menu}
          </button>

          {/* links  */}
          <div
            className={`${
              isCollapsed ? "hidden" : ""
            }   absolute w-[150px] top-5 sm:block sm:relative py-5  pr-2 sm:text-center sm:top-0 grow bg-inherit `}
          >
            <ul className="sm:flex justify-center sm:space-x-2 md:space-x-8 items-center w-4/5 m-auto text-lg">
              <NavBar />
            </ul>
          </div>
          <div className=" order-last  flex flex-col sm:flex-row gap-2 justify-center items-center">
            {/* hire button */}
            <Link to="/hire-Me">
              <Button className="ms-2  flex flex-col sm:flex-row gap-1 ">
                <span>{envelope}</span>
                <span> Hire me</span>
              </Button>
            </Link>
            {/* theme icon */}
            <button
              onClick={themeToggle}
              className=" bg-slate-200 border-2 rounded-lg p-1 w-fit  hover:scale-110 shadow-md hover:shadow-lg hover:bg-slate-300"
            >
              {theme === "dark" ? Dark : Light}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
