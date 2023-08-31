// import { useState } from 'react'
import "./App.css";
import AboutMe from "./pages/AboutMe";

import { Route, Routes } from "react-router";
import AppLayout from "./components/Layout/AppLayout";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import HireMeForm from "./components/HireMeForm";
import { useState } from "react";
import { ThemeContext } from "./utils/ThemeContext";
function App() {
  const [theme, setTheme] = useState<string>("dark");
  return (
    <>
      <div className={`${theme === "dark" ? "bg-white " : "bg-darkTheme "} `}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="contact-Me" element={<ContactMe />} />
              <Route path="hire-Me" element={<HireMeForm />} />
            </Route>
          </Routes>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
