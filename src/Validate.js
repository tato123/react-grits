import React from "react";
import ErrorBox from "./Error";

export default options => Component => props => {
  const count = React.Children.count(props.children);
  if (options.minChildren && count < options.minChildren) {
    const e = new Error(`Expected 3 elements, received ${count}`);
    return <ErrorBox error={e} />;
  }

  return <Component  {...props}/>;
};
