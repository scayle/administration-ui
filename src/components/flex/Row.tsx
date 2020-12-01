import React from "react";

import "./flex.scss";

const Row = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div {...props} className={`sdc-row${className ? ` ${className}` : ""}`} />
  );
};

export default Row;
