import React from 'react';
import styled from 'styled-components';
import {Grid, createGridItemsForChildren} from '../Grid';

const AsideLeft = ({children, ...rest}) => {
    const [Master, Detail] = createGridItemsForChildren(children);
    return (
        <Grid 
            templateAreas={[["master", "detail"]]} 
            templateColumns="30% 70%"
            columnGap="30px" 
        {...rest}>
           <Master borderRight gridArea="master"/>
           <Detail gridArea="detail"/>
        </Grid>
    );
}

AsideLeft.options = {
    maxChildren: 2
}

export default AsideLeft;