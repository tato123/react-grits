import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AsideRight from "../src/templates/Thirds";
import Box from '../src/Box';

storiesOf("Layouts", module).add("with Third", () => (
  <AsideRight>
    <div gridArea="view1">
      <h1>test</h1>
      <div>
        <label>butter</label>
      </div>
    </div>
    <div gridArea="view2"><Box/></div>
    <div gridArea="view3"><Box/></div>
  </AsideRight>
));
