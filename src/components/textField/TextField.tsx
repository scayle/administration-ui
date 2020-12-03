import React from "react";
import {
  TextField as RMWCTextField,
  TextFieldHTMLProps,
  TextFieldProps,
} from "@rmwc/textfield";
import * as RMWC from "@rmwc/types";
import { responsive } from "../hooks";
import { SpaceSize } from "../responsiveTheme";

type Props = RMWC.ComponentProps<TextFieldProps, TextFieldHTMLProps, "button">;

const TextField = responsive({
  spaceSize: SpaceSize.md,
})((props: Props) => {
  return <RMWCTextField {...props} />;
});

export default TextField;
