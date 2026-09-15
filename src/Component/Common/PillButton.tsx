import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface PillButtonProps {
  text?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "dark" | "light" | "purple";
  size?: "default" | "sm" | "lg";
}

export const PillButton: React.FC<PillButtonProps> = ({
  text = "Contact Us",
  to,
  href,
  onClick,
  className = "",
  variant = "dark",
  size = "default",
}) => {
  const isDark = variant === "dark";
  const isPurple = variant === "purple";

  const sizeClasses = {
    sm: "pl-4 pr-1.5 py-1.5 text-xs gap-2",
    default: "pl-5 pr-2 py-2 text-sm gap-3",
    lg: "pl-6 pr-2.5 py-2.5 text-base gap-3.5",
  }[size];

  const circleSize = {
    sm: "w-6 h-6",
    default: "w-8 h-8",
    lg: "w-9 h-9",
  }[size];

  const iconSize = {
    sm: 13,
    default: 16,
    lg: 18,
  }[size];

  const bgClasses = isDark
    ? "bg-[#0B0E14] text-white hover:bg-neutral-800"
    : isPurple
    ? "bg-[#5B4DFC] text-white hover:bg-[#4d3fe8]"
    : "bg-white text-[#0B0E14] border border-neutral-200 hover:bg-neutral-50 shadow-sm";

  const circleClasses = isDark || isPurple
    ? "bg-white text-[#0B0E14]"
    : "bg-[#0B0E14] text-white";

  const content = (
    <>
      <span className="font-medium tracking-tight whitespace-nowrap select-none">
        {text}
      </span>
      <span
        className={`rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12 ${circleSize} ${circleClasses}`}
      >
        <ArrowUpRight size={iconSize} strokeWidth={2.2} />
      </span>
    </>
  );

  const baseClasses = `group inline-flex items-center rounded-full transition-all duration-300 cursor-pointer ${sizeClasses} ${bgClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} id="pill-nav-link">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" id="pill-anchor-link">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} id="pill-action-button">
      {content}
    </button>
  );
};
