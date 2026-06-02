import type { MouseEventHandler, ReactNode } from "react";
import ButtonArrow from "@/shared/components/icons/ButtonArrow";

type Variant = "primary" | "secondary" | "outline" | "purple";
type Size = "sm" | "md" | "lg";

type BigButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  showArrow?: boolean;
};

const variants: Record<Variant, string> = {
  primary: "bg-black text-white border-black hover:bg-black/90",
  secondary:
    "bg-transparent text-[#5F5C6D] border-[#5F5C6D] hover:bg-[#5F5C6D]/10",
  outline: "bg-white text-black border-black hover:bg-black hover:text-white",
  purple: "bg-[#5E4FC4] text-white border-[#5E4FC4] hover:bg-[#5E4FC4]/90",
};

const sizes: Record<Size, string> = {
  sm: "px-[16px] py-[8px] h-[30px] text-[12px]",
  md: "w-[240px] h-[40px]",
  lg: "w-[292px] h-[48px]",
};

const BigButton = ({
  children,
  variant = "secondary",
  size = "lg",
  href,
  onClick,
  showArrow = true,
}: BigButtonProps) => {
  const className = `
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
  `;

  const inner = (
    <>
      <span>{children}</span>
      {showArrow && <ButtonArrow className="stroke-current" />}
    </>
  );

  if (href && href !== "#") {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {inner}
    </button>
  );
};

export default BigButton;
