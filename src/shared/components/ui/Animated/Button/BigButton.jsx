import ButtonArrow from "@/shared/components/icons/ButtonArrow";
import React from "react";

const BigButton = ({
  children,
  variant = "secondary",
  size = "lg",
  href = "#",
  showArrow = true,
}) => {
  const variants = {
    primary: "bg-black text-white border-black hover:bg-black/90",
    secondary:
      "bg-transparent text-[#6F6C7D] border-[#6F6C7D] hover:bg-[#6F6C7D]/10",
    outline:
      "bg-white text-black border-black hover:bg-black hover:text-white",
    purple:"bg-[#5E4FC4] text-white border-[#5E4FC4] hover:bg-[#5E4FC4]/90",
    
  };

  const sizes = {
    sm: "px-[16px] py-[8px] h-[30px] text-[12px]",
    md: "w-[240px] h-[40px]",
    lg: "w-[292px] h-[48px]",
  };

  return (
    <a
      href={href}
      className={`
        rounded-[100px]
        border
        flex
        items-center
        justify-center
        gap-[10px]
        transition-all
        duration-300
        ${sizes[size]}
        ${variants[variant]}
      `}
    >
      <span>{children}</span>
      {showArrow && <ButtonArrow className="stroke-current" />}
    </a>
  );
};

export default BigButton;
