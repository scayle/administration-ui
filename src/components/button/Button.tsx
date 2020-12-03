import React from "react";
import {
  Button as RMWCButton,
  ButtonHTMLProps,
  ButtonProps,
} from "@rmwc/button";
import * as RMWC from "@rmwc/types";
import { responsive } from "../hooks";
import { SpaceSize } from "../responsiveTheme";

type Props = RMWC.ComponentProps<ButtonProps, ButtonHTMLProps, "button">;

const Button = responsive({
  spaceSize: SpaceSize.md,
})((props: Props) => {
  return <RMWCButton {...props} />;
});

export default Button;
