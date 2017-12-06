import React from "react";
import styled from "styled-components";

const BorderBox = styled.div`
  border: 2px solid blue;
  height: 100%;
  background: red;
`;

const Box = () => (
  <div>
    <BorderBox>
      <h1>hello</h1>
    </BorderBox>
  </div>
);
export default Box;
