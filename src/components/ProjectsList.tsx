import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { ThemeContext } from "../utils/ThemeContext";

interface Project {
  id: number;
  imgs_links: string;
  project_name: string;
  description: string;
  link: string;
  readMeLink: string;
}

interface projectsProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: projectsProps) => {
  const { theme } = useContext(ThemeContext);
  const [hoverCard, setHoverCard] = useState(null);

  const handleCardMouseEnter = (id) => {
    setHoverCard(id);
  };

  const handleCardMouseLeave = (id) => {
    setHoverCard(null);
  };

  return (
    <>
      <h2
        className={`
      text-5xl font-bold italic mb-5 pl-2 w-fit pb-2 mt-8 pb-2${
        theme === "light" ? " text-lightTheme" : " text-darkTheme"
      }`}
      >
        My Projects
      </h2>

      <div className="flex flex-wrap gap-5 mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative shadow-xl border border-slate-200 rounded-md pb-6 md:w-[20rem] mx-auto"
          >
            <Link to={`${project.link}`}>
              <div
                className="relative group"
                onMouseEnter={() => {
                  handleCardMouseEnter(project.id);
                }}
                onMouseLeave={() => {
                  handleCardMouseLeave(project.id);
                }}
              >
                <img
                  className="object-fit h-64 w-full bg-slate-600 rounded-t-md cursor-pointer hover:scale-[101%] transition"
                  src={project.imgs_links}
                  alt={project.project_name}
                />
                {hoverCard === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to={`${project.link}`} target="_blank">
                      <Button className="px-3 py-1 ">Visit</Button>
                    </Link>
                  </div>
                )}
              </div>
            </Link>
            <div className="px-4 py-1">
              <div
                className={`font-semibold text-xl mt-2 mb-1 ${
                  theme === "light" ? "text-lightTheme" : "text-darkTheme"
                }`}
              >
                {project.project_name}
              </div>
              <p
                className={`${
                  theme === "light" ? "text-lightTheme" : "text-gray-500"
                } text-lg italic h-fit  pt-2`}
              >
                {`${project.description.slice(0, 80)}...`}
                <Link
                  to={`${project.readMeLink}`}
                  className="underline text-btn-primary"
                >
                  See More
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsList;
