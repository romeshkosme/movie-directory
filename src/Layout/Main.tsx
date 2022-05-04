import React, { memo } from "react";

function Main(props: any) {
  return <React.Fragment>{props.component}</React.Fragment>;
}

export default memo(Main);
