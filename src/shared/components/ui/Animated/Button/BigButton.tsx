import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { tv, type VariantProps } from "tailwind-variants";
import ButtonArrow from "@/shared/components/icons/ButtonArrow";

const button = tv({
  base: "group rounded-full border inline-flex items-center justify-center gap-2.5 transition-all duration-300 hover:gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
  variants: {
    variant: {
      primary: "bg-black text-white border-black hover:bg-black/90",
      secondary: "bg-transparent text-muted border-muted hover:bg-muted/10",
      outline: "bg-white text-black border-black hover:bg-black hover:text-white",
      purple: "bg-brand text-white border-brand hover:bg-brand/90",
      light: "bg-white text-brand border-white hover:bg-white/90",
    },
    size: {
      sm: "px-4 py-2 min-h-[36px] text-xs",
      md: "w-full max-w-[240px] sm:w-[240px] h-[40px]",
      lg: "w-full max-w-[292px] sm:w-[292px] h-[48px]",
    },
  },
  defaultVariants: { variant: "secondary", size: "lg" },
});

type BigButtonProps = VariantProps<typeof button> & {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  showArrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

const BigButton = ({
  children,
  variant,
  size,
  to,
  href,
  onClick,
  showArrow = true,
  className,
  ariaLabel,
}: BigButtonProps) => {
  const classes = button({ variant, size, class: className });

  const inner = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ButtonArrow className="stroke-current transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  if (href && href !== "#") {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
};

export default BigButton;
