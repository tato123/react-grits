import React from 'react';
import styled from 'styled-components';
import {Grid, createGridItemsForChildren} from '../Grid';

const SplitHalf = ({children, ...rest}) => {
    const [Master, Detail] = createGridItemsForChildren(children);
    return (
        <Grid 
            templateAreas={[["master", "detail"]]}
            templateColumns="50% 50%" 
            columnGap="30px" 
            {...rest}
        >
           <Master borderRight gridArea="master"/>
           <Detail gridArea="detail"/>
        </Grid>
    );
}

SplitHalf.options = {
    maxChildren: 2
}

export default SplitHalf;