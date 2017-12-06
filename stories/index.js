import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AsideRight from "../src/templates/AsideRight";
import Box from '../src/Box';

storiesOf("Layouts", module).add("with Third", () => (
  <AsideRight debug>
    <div gridArea="master">
      <h1>test</h1>
      <div>
        <label>butter</label>
      </div>
    </div>
    <div gridArea="detail"><h2>test3</h2></div>
  </AsideRight>
));
