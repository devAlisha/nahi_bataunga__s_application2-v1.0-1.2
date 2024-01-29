import React from "react";

const sizeClasses = {
  txtInterRegular10: "font-inter font-normal",
  txtInterMedium12: "font-inter font-medium",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterMedium32: "font-inter font-medium",
  txtInterMedium10: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium48: "font-inter font-medium",
  txtInterRegular14Lime900: "font-inter font-normal",
  txtInterRegular14Red900: "font-inter font-normal",
  txtInterRegular10Gray800: "font-inter font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterMedium10Gray900: "font-inter font-medium",
  txtInterRegular14Gray800: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
