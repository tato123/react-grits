import React from "react";
import { createGridWithProps } from "../Grid";
import withValidate from "../Validate";

const templateAreas = [
  ["view1", "view2", "view3"]
];
const templateColumns = "30% 30% 30%";
const columnGap = "30px";

export default withValidate({
  minChildren: 3
})(createGridWithProps({ templateAreas, templateColumns, columnGap }));
