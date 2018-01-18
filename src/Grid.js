import React from "react";
import styled, { css } from "styled-components";

const mapGridTemplateAreas = ({templateAreas = []}) =>
    templateAreas.reduce((line, area) => line + `"${area.join(' ')}"`, '');

export const Grid = styled.div`
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas: ${props => props.templateAreas};
    grid-column-gap: ${props => props.columnGap || 'initial'};
    grid-template-columns: ${props => props.templateColumns || 'initial'};
    grid-template-rows: ${props => props.templateRows || 'initial'};
    grid-row-gap: ${props => props.rowGap || 'initial'};

    ${props => props.style}
`

export const GridItem = styled.div`
  grid-column: ${props => props.gridColumn || "auto"};
  grid-row: ${props => props.gridRow || "auto"};
  grid-area: ${props => props.gridArea || ""};
  box-sizing: border-box;
`;

const gridItem = WrapperComponent => child => {
  const {gridArea = ".", ...rest} = child.props;
  return (
    <WrapperComponent gridArea={gridArea}>
      {React.createElement(child.type, { ...rest }, child.props.children)}
    </WrapperComponent>
  );
}

export const createGridItemsForChildren = (children, WrapperComponent = GridItem) =>
  React.Children.map(children, gridItem(WrapperComponent));

export const createGridWithProps = ({
  templateAreas,
  templateColumns,
  templateRows,
  columnGap,
  rowGap,
}, components = {}) => ({ children, ...rest }) => {
  const GridComponent = components.GridComponent || Grid;
  const ItemComponent = components.ItemComponent || GridItem;
  return (
    <GridComponent
      templateAreas={mapGridTemplateAreas(templateAreas)}
      templateColumns={templateColumns}
      columnGap={columnGap}
      templateRows={templateRows}
      rowGap={rowGap}
      {...rest}
    >
      {createGridItemsForChildren(children, ItemComponent)}
    </GridComponent>
  );
};
