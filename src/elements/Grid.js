import React from 'react';

import styled from 'styled-components';

const Grid = ({ is_flex, padding, space_between, relative, children }) => {
  const styles = {is_flex, padding, space_between, relative};
  return <GridBox{...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  is_flex: false,
  padding: false,
  space_between: false,
  relative: false,
  children: null,
};

const GridBox = styled.div`
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')};
  ${(props) => (props.is_flex ? `display: flex; align-items: center;` : '')};
  ${(props) => (props.space_between ? `justify-content:space-between`: "")};
  ${(props) => (props.relative ? `position: relative;` : "")};
`;

export default Grid;
