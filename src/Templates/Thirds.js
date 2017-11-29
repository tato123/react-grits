import React from 'react';
import styled from 'styled-components';
import {Grid, createGridItemsForChildren} from 'Grid';

const Thirds = ({children, ...rest}) => {
    const [View1, View2, View3] = createGridItemsForChildren(children);
    return (
        <Grid 
            templateAreas={[["view1", "view2", "view3"]]} 
            templateColumns="30% 30% 30%"
            columnGap="30px" 
        {...rest}>
           <View1 borderRight gridArea="view1"/>
           <View2 borderRight gridArea="view2"/>
           <View3 gridArea="view3"/>
        </Grid>
    );
}

Thirds.options = {
    maxChildren: 3,
    minChildren: 3
}

export default Thirds;