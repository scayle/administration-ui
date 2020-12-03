import React, { ReactNode } from "react";

import "./normalize.min.css";
import "./default.scss";
import "./responsiveTheme.scss";

interface Props {
  theme?: string;
  children?: ReactNode;
}

const ResponsiveTheme = ({ theme = "default", children }: Props) => {
  return <div data-responsive-theme={theme}>{children}</div>;
};

export default ResponsiveTheme;
