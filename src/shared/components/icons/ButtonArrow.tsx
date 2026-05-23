import { memo, type SVGProps } from "react";

const ButtonArrow = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M12.333 10.333V3.667H5.667M4 12l8-8"
      stroke="currentColor"
      strokeLinecap="square"
    />
  </svg>
);

export default memo(ButtonArrow);
