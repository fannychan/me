import styled from "styled-components";

export const Section = styled.div<{ flat?: boolean; color?: string }>`
  background-color: ${(props) => (props.color ? props.color : "#ffeaf0")};
  padding: 20px 20px 50px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 768px) {
    padding: 30px 250px 100px;
  }

  &:before {
    content: "";
    background-color: ${(props) => (props.color ? props.color : "#ffeaf0")};
    height: 70px;
    transform: ${(props) => (props.flat ? "" : "skewY(-2deg)")};
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    top: -30px;
  }
`;
