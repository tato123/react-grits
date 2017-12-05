import React from "react";
import { createGridWithProps } from "../Grid";
import withValidate from "../Validate";

const templateAreas = [
  ["master", "detail"]
];
const templateColumns = "30% 70%";
const columnGap = "30px";

export default withValidate({
  minChildren: 2
})(createGridWithProps({ templateAreas, templateColumns, columnGap }));
