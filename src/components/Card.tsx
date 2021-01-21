import React from "react";
import styled from "styled-components";
import { Chip } from "./Chip";

const StyledCard = styled.div`
  border-top: grey;
  list-style: none;
  display: flex;
  background-color: white;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.2);
  width: 100%;
  margin-top: 20px;
  
  @media (min-width: 768px) {
    width: 450px;
    margin-right: 20px
  }
`;

export const Card = ({ imageUrl, name, genres }) => {
  return (
    <StyledCard>
      <img
        style={{
          height: "140px",
          width: "140px",
          marginRight: "15px",
          objectFit: "cover",
        }}
        src={imageUrl}
      />
      <div>
        <p style={{marginBottom: 0}}>{name}</p>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {genres.map((genre: string) => {
            return <Chip>{genre}</Chip>;
          })}
        </div>
      </div>
    </StyledCard>
  );
};
