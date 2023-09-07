import React from "react";
import { Link } from "react-router-dom";
import { Forword } from "../utils/Icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const SeeMore: React.FC = () => {
  const [refSeeMore, inViewSeeMore] = useInView({
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={refSeeMore}
      initial={{ opacity: 0, x: -50 }} // Initial position and opacity for h2 (move from the left and be hidden).
      animate={inViewSeeMore ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate when in view.
      exit={{ opacity: 0, x: -50 }} // Animate when exiting view.
      transition={{ duration: 1 }}
    >
      <Link
        to="https://github.com/HebaAli48?tab=repositories"
        target="_blank"
        className="mb-2 flex gap-1 items-center text-lg text-btn-primary hover:translate-x-[2px] hover:text-sky-400 transition-all"
      >
        <span className="ml-auto">More Projects </span> <span>{Forword}</span>
      </Link>
    </motion.div>
  );
};

export default SeeMore;
