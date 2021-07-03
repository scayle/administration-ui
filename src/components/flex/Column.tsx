import React from "react";

import "./flex.scss";

const Column = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      {...props}
      className={`sdc-column${className ? ` ${className}` : ""}`}
    />
  );
};

export default Column;
