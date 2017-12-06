import React from "react";
import styled from "styled-components";

const BorderBox = styled.div`
  height: 100%;
  width: 100%;
  background:#90CAF9;
`;

export default Component =>
  class Debugger extends React.Component {

    render() {
      const { children } = this.props;
      const newElements = React.Children.map(children, child => {
        if (this.props.debug) {
            return <BorderBox gridArea="."/>
        }   
        return React.cloneElement(child, child.props)
      });
      const customStyle = {
        ...this.props.style,
        ...(this.props.debug ? {border: '1px solid blue'} : {})        
      }

      return <Component {...this.props} style={customStyle}>{newElements}</Component>;
    }
  };
