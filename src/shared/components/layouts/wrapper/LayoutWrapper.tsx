import type { ReactNode } from "react";

type LayoutWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function LayoutWrapper({ children, className = "" }: LayoutWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px]   ${className}`}>
      {children}
    </div>
  );
}
