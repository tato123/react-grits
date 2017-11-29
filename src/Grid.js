import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const mapGridTemplateAreas = ({templateAreas = []}) => (
    templateAreas.map(area => `grid-template-areas: "${area.join(' ')}";`)
)

const count = ({templateAreas = []}) => (templateAreas.length);

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: minmax(100px, auto);
    ${mapGridTemplateAreas}
    min-width: 100vw;
    min-height: 100vh;
    grid-column-gap: ${props => props.columnGap || 'initial'};
    grid-template-columns: ${props => props.templateColumns};


    ${props => props.style}
    
`

export const GridItem = styled.div`
    grid-column: ${props => props.gridColumn || 'auto'};
    grid-row: ${props => props.gridRow || 'auto'};
    grid-area: ${props => props.gridArea || ''};
    ${props => props.style}
    ${props => props.borderRight && "border-right: 1px solid #c2c2c2;"} ;

    @media only screen and (min-width: 1500px) {
        border-right: none !important;
    }
`;

export const createGridItemsForChildren = (children) => React.Children.map(children, child => (
    (props) => (
        <GridItem {...props}>
            {React.cloneElement(child, {...child.props})}
        </GridItem>
    )
));