import React from "react";
import { Link } from "react-router-dom";
import { Forword } from "../utils/Icons";

const SeeMore = () => {
  return (
    <Link
      to="/"
      className="mb-2 flex gap-1 items-center text-lg text-btn-primary hover:translate-x-[2px] hover:text-sky-400 transition-all"
    >
      <span className="ml-auto">More Projects </span> <span>{Forword}</span>
    </Link>
  );
};

export default SeeMore;
