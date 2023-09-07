import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { ThemeContext } from "../utils/ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface Project {
  id: number;
  imgs_links: string;
  project_name: string;
  description: string;
  link: string;
  readMeLink: string;
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsProps> = ({ projects }) => {
  const { theme } = useContext(ThemeContext);
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  const [refH2, inViewH2] = useInView({
    threshold: 0.5,
  });

  const handleCardMouseEnter = (id: number) => {
    setHoverCard(id);
  };

  const handleCardMouseLeave = () => {
    setHoverCard(null);
  };

  return (
    <>
      <motion.div
        ref={refH2}
        initial={{ opacity: 0, x: -50 }}
        animate={inViewH2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        <h2
          className={`
      text-4xl sm:text-5xl font-bold italic mb-5 pl-2 w-fit pb-2 mt-8 pb-2${
        theme === "light" ? " text-lightTheme" : " text-darkTheme"
      }`}
        >
          My Projects
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mx-auto mt-16">
        {projects.map((project) => {
          const [refProject, inViewProject] = useInView({
            threshold: 0.5,
          });

          return (
            <motion.div
              key={project.id}
              ref={refProject}
              initial={{ opacity: 0, x: 50 }}
              animate={
                inViewProject ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              } // Animate when in view.
              exit={{ opacity: 0, x: 50 }} // Animate when exiting view.
              transition={{ duration: 1 }}
            >
              <div
                id="card"
                key={project.id}
                className="relative shadow-xl border border-slate-200 rounded-md pb-6   w-[20rem] "
              >
                <Link to={`${project.link}`} target="_blank">
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      handleCardMouseEnter(project.id);
                    }}
                    onMouseLeave={() => {
                      handleCardMouseLeave();
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
                          <Button className="px-3 py-1">Visit</Button>
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
                      target="_blank"
                      to={`${project.readMeLink}`}
                      className="underline text-btn-primary"
                    >
                      See More
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsList;
