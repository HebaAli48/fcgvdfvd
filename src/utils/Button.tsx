import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  const clickHandler = () => {
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      onClick={() => clickHandler()}
      className={`bg-sky-600  hover:bg-slate-300 text-slate-200 hover:text-sky-700  hover:scale-105 font-bold  inline-flex items-center rounded-lg px-2 py-2 text-md transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
