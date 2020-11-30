import React from "react";

import "./flex.css";

const Column = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div {...props} className={`column${className ? ` ${className}` : ""}`} />
  );
};

export default Column;
