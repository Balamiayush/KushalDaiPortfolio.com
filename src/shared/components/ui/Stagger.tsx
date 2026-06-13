import type { ReactNode } from "react";
import { m } from "framer-motion";
import {
  MOTION_TAGS,
  VIEWPORT,
  staggerContainer,
  fadeUpItem,
  type MotionTag,
} from "@/shared/constants/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTag;
  stagger?: number;
  delayChildren?: number;
};

/** Parent that cascades its <Stagger.Item> children in when scrolled into view. */
export function Stagger({
  children,
  className,
  as = "div",
  stagger,
  delayChildren,
}: StaggerProps) {
  const Comp = MOTION_TAGS[as] as typeof m.div;
  return (
    <Comp
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </Comp>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTag;
  y?: number;
  duration?: number;
};

/** Child of <Stagger>; inherits the container's cascade timing. */
export function StaggerItem({
  children,
  className,
  as = "div",
  y,
  duration,
}: StaggerItemProps) {
  const Comp = MOTION_TAGS[as] as typeof m.div;
  return (
    <Comp variants={fadeUpItem(y, duration)} className={className}>
      {children}
    </Comp>
  );
}
