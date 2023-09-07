import React from "react";
import LoadingIcon from "../../assets/images/loadingicon.png";

const Loading: React.FC = () => {
  return (
    <div className="text-center">
      <img src={LoadingIcon} alt="Loading" className="m-auto" />
    </div>
  );
};

export default Loading;
