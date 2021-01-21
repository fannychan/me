import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "avataaars";
import { createGlobalStyle } from "styled-components";

import { Link, useStaticQuery, graphql } from "gatsby";
import { Home } from "../views/Home";
import { KnowMePage } from "../views/GetToKnowMe";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  h1, h2 {
    font-weight: 300;
    font-size: 2rem;
  }

  p {
    line-height: 1.5;
    font-weight: 300;
    font-size: 1rem;
    max-width: 600px;
  }
`;

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

const Header = styled.div`
  max-height: 340px;
  display: flex;
  margin: 30px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 30px 250px 45px;
    width: 845px;
  }
`;

const Menu = styled.div`
  margin-bottom: 30px;
  display: flex;
  text-transform: uppercase;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
    margin: 40px 250px;
  }
`;

const StyledTabButton = styled.button<{ active?: boolean }>`
  border: none;
  text-transform: uppercase;
  background: white;
  padding-bottom: 5px;
  border-bottom: ${(props) =>
    props.active ? "3px solid #253d61" : "3px solid white"};
  font-size: 1rem;
  letter-spacing: 0.09rem;
  margin-right: 15px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const IndexPage = ({ data }) => {
  const [currentView, setCurrentView] = useState("home");
  //console.log(data.dataJson.data);
  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <title>Welcome to my CV</title>

      <Header>
        <Avatar
          avatarStyle="Circle"
          topType="LongHairStraight"
          accessoriesType="Blank"
          hairColor="Black"
          facialHairType="Blank"
          clotheType="CollarSweater"
          clotheColor="Gray01"
          eyeType="Happy"
          eyebrowType="Default"
          mouthType="Smile"
          skinColor="Light"
          style={{ height: "100%" }}
        />
        <h1 style={headingStyles}>
          Hi there!
          <br />
          <span style={headingAccentStyles}>
            — I'm Fanny. Welcome to my page!{" "}
          </span>
          <span role="img" aria-label="Hand waving emoji">
            👋
          </span>
        </h1>
      </Header>
      <Menu>
        <StyledTabButton
          active={currentView === "home"}
          onClick={() => setCurrentView("home")}
        >
          About
        </StyledTabButton>

        <StyledTabButton
          active={currentView === "get-to-know-me"}
          onClick={() => setCurrentView("get-to-know-me")}
        >
          Get to know me
        </StyledTabButton>
      </Menu>
      {(currentView === "home" && <Home />) ||
        (currentView === "get-to-know-me" && <KnowMePage />)}
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    dataJson {
      data {
        heading
        icon
        text
      }
    }
  }
`;
