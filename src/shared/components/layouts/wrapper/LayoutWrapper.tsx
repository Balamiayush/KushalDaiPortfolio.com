import type { ReactNode } from "react";

type LayoutWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function LayoutWrapper({ children, className = "" }: LayoutWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
