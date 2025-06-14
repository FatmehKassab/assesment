import React from "react";
import { ICONS } from "../../utils/icons";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  icon?: keyof typeof ICONS;
  className?: string;
  onClick?: () => void;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  title,
  icon,
  className = "",
  onClick,
  bgColor = "primary",
}) => {
  return (
    <button
      className={`w-full flex items-center justify-center gap-2 bg-${bgColor} hover:bg-${bgColor}/80 py-2 rounded-full  ${className}`}
      type={type}
      onClick={onClick}
    >
      <span className="font-semibold text-sm cursor-pointer capitalize text-white">
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
