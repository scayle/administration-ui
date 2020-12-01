import React, { ReactNode } from "react";

import "./normalize.min.css";
import "./default.scss";
import "./theme.scss";

interface Props {
  theme?: string;
  children?: ReactNode;
}

const Theme = ({ theme = "default", children }: Props) => {
  return <div data-theme={theme}>{children}</div>;
};

export default Theme;
