import React from "react";
import { SpaceSize } from "../responsiveTheme";

interface HasClassName {
  className?: string;
}

interface Responsive {
  spaceSize?: SpaceSize;
}

type WrapperType = <P extends HasClassName>(
  baseComponent: React.FunctionComponent<P>
) => React.FunctionComponent<P & Responsive>;

export function responsive(defaults: Responsive): WrapperType {
  return (baseComponent) => {
    return (props) => {
      const newProps = { ...props };

      console.log(props.spaceSize || defaults.spaceSize);

      if (props.spaceSize || defaults.spaceSize) {
        newProps.className +=
          " sdc-space-" + (props.spaceSize || defaults.spaceSize);
      }

      return baseComponent(newProps);
    };
  };
}
