import React from "react";
import { createGridWithProps } from "../Grid";
import validate from "../Validate";
import debug from "../Debugger";

const templateAreas = [
  ["view1", "view2"]
];
const templateColumns = "1fr 1fr";
const columnGap = "30px";

const validator = validate({minChildren: 2});
const Component = createGridWithProps({ templateAreas, templateColumns, columnGap });
export default debug(validator(Component))
