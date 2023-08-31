import Button from "../utils/Button";
import { Download } from "../utils/Icons";
import CV from "../assets/files/Heba Mohammed -Full Stack Web Developer--Mearn.pdf";

const DownloadCv: React.FC = () => {
  return (
    <>
      <a
        href={CV}
        download="Heba Mohammed -Full Stack Web Developer-Mearn"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="ms-2">
          {" "}
          {Download}
          DownLoad Cv
        </Button>
      </a>
    </>
  );
};

export default DownloadCv;
