import React from 'react';
import styled from 'styled-components';
import {Grid, createGridItemsForChildren} from '../Grid';

const AsieRight = ({children, ...rest}) => {
    const [Master, Detail] = createGridItemsForChildren(children);
    return (
        <Grid 
            templateAreas={[["master", "detail"]]} 
            templateColumns="70% 30%"
            columnGap="30px" 
        {...rest}>
           <Master borderRight gridArea="master"/>
           <Detail gridArea="detail"/>
        </Grid>
    );
}

AsieRight.options = {
    maxChildren: 2
}

export default AsieRight;