import React from "react";
import ErrorBox from "Error";

export default options => Component =>
  class ValidatedComponent extends React.Component {
    render() {
      const count = React.Children.count(this.props.children);
      if (options.minChildren && count < options.minChildren) {
        const e = new Error(`Expected 3 elements, received ${count}`);
        return <ErrorBox error={e} />;
      }

      return <Component />;
    }
  };
