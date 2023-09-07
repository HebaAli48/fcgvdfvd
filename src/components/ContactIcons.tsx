import { GitHub, FaceBook, LinkedIn, Whasapp } from "../utils/Icons";
import { Link } from "react-router-dom";

const ContactIcons: React.FC = () => {
  const buttonStyle =
    " bg-slate-200 text-black border-2 rounded-lg p-2 hover:scale-110 shadow-md hover:shadow-lg hover:bg-slate-300";
  return (
    <>
      <div className="mb-5 flex gap-2 sm:gap-5 ">
        <Link to="https://github.com/HebaAli48" target="_blank">
          <button className={buttonStyle}>{GitHub}</button>
        </Link>
        <Link
          target="_blank"
          to="https://www.facebook.com/profile.php?id=100004511587846"
        >
          {" "}
          <button className={buttonStyle}>{FaceBook}</button>
        </Link>
        <Link target="_blank" to="https://wa.me/201095792724">
          {" "}
          <button className={buttonStyle}>{Whasapp}</button>
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/heba-ali-3b8617205/"
        >
          {" "}
          <button className={buttonStyle}>{LinkedIn}</button>
        </Link>
      </div>
    </>
  );
};

export default ContactIcons;
