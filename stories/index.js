import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { AsideRight, AsideLeft, Thirds, SplitHalf } from "../src";

storiesOf("Layouts", module)
  .add("SplitHalf", () => (
    <SplitHalf>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
    </SplitHalf>
  ))
  .add("SplitHalf debug", () => (
    <SplitHalf debug>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
    </SplitHalf>
  ))
  .add("AsideRight", () => (
    <AsideRight>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
    </AsideRight>
  ))
  .add("AsideRight debug", () => (
    <AsideRight debug>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
    </AsideRight>
  ))
  .add("AsideLeft", () => (
    <AsideLeft>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
    </AsideLeft>
  ))
  .add("AsideLeft debug", () => (
    <AsideLeft debug>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
    </AsideLeft>
  ))
  .add("Thirds", () => (
    <Thirds>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
      <div gridArea="view3">Third panel</div>
    </Thirds>
  ))
  .add("Thirds debug", () => (
    <Thirds debug>
      <div gridArea="view1">
        <h1>test</h1>
        <div>
          <label>butter</label>
        </div>
      </div>
      <div gridArea="view2"><h2>test3</h2></div>
      <div gridArea="view3">Third panel</div>
    </Thirds>
  ));
