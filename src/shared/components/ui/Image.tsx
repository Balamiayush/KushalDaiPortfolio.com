import type { ImgHTMLAttributes, Ref } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const image = tv({
  base: "block object-cover",
  variants: {
    ratio: {
      "4/5": "aspect-[4/5]",
      "4/3": "aspect-[4/3]",
      "16/10": "aspect-[16/10]",
      "16/9": "aspect-[16/9]",
      square: "aspect-square",
      auto: "",
    },
    rounded: {
      none: "",
      sm: "rounded-xl",
      md: "rounded-xl md:rounded-2xl",
      lg: "rounded-2xl md:rounded-[20px]",
      xl: "rounded-[20px] md:rounded-3xl",
      full: "rounded-full",
    },
    fill: {
      true: "absolute inset-0 h-full w-full",
      false: "h-full w-full",
    },
    zoom: {
      true: "transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]",
      false: "",
    },
  },
  defaultVariants: { ratio: "auto", rounded: "none", fill: false, zoom: false },
});

/**
 * CSS-first entrance presets (tailwindcss-motion). They play on mount, so use
 * them above the fold; for scroll-triggered reveals wrap the image (or its
 * container) in <Reveal> instead.
 */
const ANIMATIONS = {
  none: "",
  fade: "motion-preset-fade",
  rise: "motion-preset-slide-up",
  pop: "motion-preset-pop",
  blur: "motion-preset-blur-up",
  focus: "motion-preset-focus",
} as const;

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> &
  VariantProps<typeof image> & {
    src: string;
    alt: string;
    /** High priority above-the-fold image: eager load + fetchPriority high. */
    priority?: boolean;
    /** Mount-time CSS animation preset. */
    animation?: keyof typeof ANIMATIONS;
    className?: string;
    /** React 19 passes ref as a normal prop — no forwardRef needed. */
    ref?: Ref<HTMLImageElement>;
  };

export default function Image({
  src,
  alt,
  ratio,
  rounded,
  fill,
  zoom,
  priority = false,
  animation = "none",
  className,
  ref,
  ...rest
}: ImageProps) {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={image({
        ratio,
        rounded,
        fill,
        zoom,
        class: `${ANIMATIONS[animation]} ${className ?? ""}`,
      })}
      {...rest}
    />
  );
}
