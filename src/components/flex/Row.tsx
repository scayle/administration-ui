import React from "react";

import "./flex.css";

const Row = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div {...props} className={`row${className ? ` ${className}` : ""}`} />
  );
};

export default Row;
