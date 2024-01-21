import { useStyledSystemPropsResolver } from "native-base";
import React from "react";

export const makeStyledComponent = (Comp: any) => {
  return React.forwardRef((props: any, ref: any) => {
    const [style, restProps] = useStyledSystemPropsResolver(props);
    return (
      <Comp {...restProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
};
