import React from "react";
import { ICONS } from "../../utils/icons";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  icon?: keyof typeof ICONS;
  className?: string;
  onClick?: () => void;
  bgColor?: string;
  width?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  title,
  icon,
  className = "",
  onClick,
  bgColor = "primary",
  width = "full",
  textColor = "white",
}) => {
  return (
    <button
      className={`w-${width} flex items-center justify-center gap-2 cursor-pointer bg-${bgColor} hover:shadow-lg py-2 px-4 rounded-full  ${className}`}
      type={type}
      onClick={onClick}
    >
      <span
        className={`font-semibold text-sm cursor-pointer capitalize text-${textColor}`}
      >
        {title}
      </span>
      {icon && (
        <span className="text-2xl text-white">
          <img src={ICONS[icon]} className="w-4 h-4" alt={`${icon} icon`} />
        </span>
      )}
    </button>
  );
};

export default Button;
