import React from "react";
import { Grid, createGridItemsForChildren } from "Grid";
import withValidate from 'Validate';

const AsieRight = ({ children, ...rest }) => {
  const [Master, Detail] = createGridItemsForChildren(children);
  return (
    <Grid
      templateAreas={[["master", "detail"]]}
      templateColumns="70% 30%"
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
})(AsieRight);
