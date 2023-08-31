import AboutMe from "./AboutMe";
import IntoducingComponent from "../components/IntoducingComponent";
import Projects from "./Projects";

const Home: React.FC = () => {
  return (
    <>
      <IntoducingComponent />
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
