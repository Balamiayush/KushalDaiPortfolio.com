import type { ReactNode } from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";

type SectionProps = {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
};

/** Standard content section: vertical rhythm + centered max-width wrapper. */
export default function Section({
  children,
  className = "",
  wrapperClassName,
}: SectionProps) {
  return (
    <section className={`py-12 md:py-16 lg:py-30 ${className}`}>
      <LayoutWrapper className={wrapperClassName}>{children}</LayoutWrapper>
    </section>
  );
}
