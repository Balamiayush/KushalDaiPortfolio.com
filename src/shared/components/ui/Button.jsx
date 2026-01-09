import { tv } from "tailwind-variants";

const buttonClasses = tv({
  base: "inline-flex text-c2 font-bold items-center justify-center gap-2 min-w-max transition-all duration-300 ease-in-out cursor-pointer disabled:cursor-default",
  variants: {
    variant: {
      primary:
        "bg-blue-300 text-neutral-0 border border-blue-300 hover:bg-blue-200 disabled:bg-blue-100 disabled:opacity-50 disabled:hover:bg-blue-300",
      outlined:
        "bg-transparent text-blue-300 border border-blue-300 hover:bg-blue-0 hover:border-blue-400 hover-text-blue-400 disabled:opacity-50 disabled:hover:bg-transparent",
    },
    size: {
      default: "h-[52px] p-[14px]",
      large:
        "h-[57px] px-4.5 py-6.5 md:h-[112px] xl:h-[262px] text-[14px] md:text-[16px] xl:text-[32px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export default function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...otherProps
}) {
  return (
    <button
      className={buttonClasses({ variant, size, className })}
      {...otherProps}
    >
      {children}
    </button>
  );
}
