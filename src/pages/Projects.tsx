import React from "react";
import ProjectsList from "../components/ProjectsList";
import SeeMore from "../components/SeeMore";
import projects from "../utils/ProjectsList";

const Projects: React.FC = () => {
  return (
    <>
      <div className={` container   `} id="projects">
        <ProjectsList projects={projects} />
        <div className=" text-right max-w-screen-xl mx-auto mt-3">
          {" "}
          <SeeMore />
        </div>
      </div>
    </>
  );
};

export default Projects;
