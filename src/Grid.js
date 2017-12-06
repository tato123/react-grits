import React from "react";
import styled from "styled-components";

const mapGridTemplateAreas = ({templateAreas = []}) => 
    templateAreas.reduce((line, area) => line + `"${area.join(' ')}"`, '');

const count = ({templateAreas = []}) => (templateAreas.length);

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas: ${mapGridTemplateAreas};
    min-width: 100vw;
    min-height: 100vh;
    grid-column-gap: ${props => props.columnGap || 'initial'};
    grid-template-columns: ${props => props.templateColumns};


    ${props => props.style}
    
`

export const GridItem = styled.div`
  grid-column: ${props => props.gridColumn || "auto"};
  grid-row: ${props => props.gridRow || "auto"};
  grid-area: ${props => props.gridArea || ""};
  ${props => props.style} ${props =>
      props.borderRight && "border-right: 1px solid #c2c2c2;"};

  @media only screen and (min-width: 1500px) {
    border-right: none !important;
  }
  
  box-sizing: border-box;
`;

const gridItem =  child => {
  const {gridArea = ".", ...rest} = child.props;
  return (
    <GridItem gridArea={gridArea}>
      {React.createElement(child.type, { ...rest }, child.props.children)}
    </GridItem>
  );
} 

export const createGridItemsForChildren = children =>
  React.Children.map(children, gridItem);

export const createGridWithProps = ({templateAreas, templateColumns, columnGap}) => ({ children, ...rest }) => {
  return (
    <Grid
      templateAreas={templateAreas}
      templateColumns={templateColumns}
      columnGap={columnGap}
      {...rest}
    >
      {createGridItemsForChildren(children)}      
    </Grid>
  );
};
