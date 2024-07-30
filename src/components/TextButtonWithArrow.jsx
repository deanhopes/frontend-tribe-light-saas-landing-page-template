import React from "react";

const PrimaryButton = ({
  children,
  onClick,
  className = "",
  ...props
}: {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  [key: string]: any,
}) => (
  <button
    className={`btn btn-primary ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
