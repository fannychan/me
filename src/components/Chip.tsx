import React from "react";
import styled from "styled-components";

const StyledChip = styled.span`
  border-radius: 20px;
  background-color: #fff7f6;
  color: #900029;
  margin-right: 10px;
  margin-top: 6px;
  padding: 10px;
  font-size: smaller;
  width: fit-content;
  border: 1px solid;
`;

export const Chip: React.FC = ({ children }) => {
  return <StyledChip>{children}</StyledChip>;
};
