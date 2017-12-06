import React from "react";
import { createGridWithProps } from "../Grid";
import validate from "../Validate";
import debug from "../Debugger";

const templateAreas = [
  ["view1", "view2", "view3"]
];
const templateColumns = "30% 30% 30%";
const columnGap = "30px";


const validator = validate({minChildren: 3});
const Component = createGridWithProps({ templateAreas, templateColumns, columnGap });
export default debug(validator(Component))