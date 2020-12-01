import React from "react";

import "./button.scss";
import Ripple from "../effect/ripple";
import { FontSize } from "../theme";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  ripple?: boolean;
  fontSize?: FontSize;
}

const Button = ({
  className,
  fontSize = FontSize.md,
  ripple = false,
  children,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`sdc-button sdc-primary${
        className ? ` ${className}` : ""
      } sdc-font-${fontSize}`}
    >
      {children}
      {ripple && <Ripple />}
    </button>
  );
};

export default Button;
