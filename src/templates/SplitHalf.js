import React from "react";
import { Grid, createGridItemsForChildren } from "Grid";
import withValidate from 'Validate';

const SplitHalf = ({ children, ...rest }) => {
  const [Master, Detail] = createGridItemsForChildren(children);
  return (
    <Grid
      templateAreas={[["master", "detail"]]}
      templateColumns="50% 50%"
      columnGap="30px"
      {...rest}
    >
      <Master borderRight gridArea="master" />
      <Detail gridArea="detail" />
    </Grid>
  );
};


export default withValidate({
  minChildren: 2
})(SplitHalf);
