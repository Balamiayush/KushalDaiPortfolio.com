import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "@/shared/components/icons/ButtonArrow";

type Variant = "primary" | "secondary" | "outline" | "purple";
type Size = "sm" | "md" | "lg";

type BigButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  showArrow?: boolean;
  className?: string;
  ariaLabel?: string;
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
  md: "w-full max-w-[240px] sm:w-[240px] h-[40px]",
  lg: "w-full max-w-[292px] sm:w-[292px] h-[48px]",
};

const BigButton = ({
  children,
  variant = "secondary",
  size = "lg",
  to,
  href,
  onClick,
  showArrow = true,
  className: extraClassName,
  ariaLabel,
}: BigButtonProps) => {
  const className = [
    "rounded-[100px]",
    "border",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-[10px]",
    "transition-all",
    "duration-300",
    "focus:outline-2",
    "focus:outline-[#5C4ABB]",
    "focus:outline-offset-4",
    sizes[size],
    variants[variant],
    extraClassName ?? "",
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  const inner = (
    <>
      <span>{children}</span>
      {showArrow && <ButtonArrow className="stroke-current" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  if (href && href !== "#") {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
};

export default BigButton;
