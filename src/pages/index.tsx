import * as React from "react";
import styled from "styled-components";
import Avatar from "avataaars";
import { SkillBlock } from "../components/SkillBlock";
import { createGlobalStyle } from "styled-components";
import Github from "../images/github.svg";
import Email from "../images/email.svg";
import Linkedin from "../images/linkedin.svg";
import { Link, useStaticQuery, graphql } from "gatsby";
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

const Section = styled.div<{ flat?: boolean; color?: string }>`
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

const Navbar = styled.nav`
  margin-bottom: 30px;
  display: flex;
  text-transform: uppercase;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 40px 250px;
  }

  ul {
    display: flex;
  }
  li {
    margin-right: 15px;
    list-style: none;
  }
`;

const IndexPage = ({ data }) => {
  console.log(data.dataJson.data);
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
      {/* <Navbar>
          <ul>
            <li><a>

              Home
            </a>
            </li>
            <Link
                to={`/projects/`}
              >
                About
              </Link>
            <li>
              BYE
            </li>
          </ul>
        
      </Navbar> */}

      <Section flat>
        <h2 style={{ color: "black", fontWeight: 300 }}>About me</h2>

        <p style={{ color: "#3a3333", maxWidth: "700px" }}>
          My name is Fanny and this is my online cv. It is a small project where
          I'm testing out Gatsby. It will probably be constanstly WIP and I will
          add more things to it as I feel for it.
        </p>
        <p>
          I'm currently located in Stockholm and working as an IT consultant at
          Byteslice. I work with web development and likes to make nice and
          good-looking web applications. Other stuff I like is deploying things
          to AWS and I have a big interest in UX.
        </p>

        <p>You can also find me here:</p>

        <a href="https://github.com/fannychan/">
          <img src={Github} style={{ height: "45px", marginRight: "10px" }} />
        </a>
        <a href="https://www.linkedin.com/in/fanny-chan/">
          <img src={Linkedin} style={{ height: "45px",  marginRight: "10px"  }} />
        </a>
        <a style={{ color: "#663399" }} href="mailto:fanny@byteslice.se">
          <img src={Email} style={{ height: "45px" }} />
        </a>
      </Section>

      <Section color="#253d61">
        <h2 style={{ color: "#d2d2d2" }}>Skills</h2>
        <SkillBlock />
      </Section>

      {/* <Section flat color="white">
        <h2>Previous projects</h2>

        <Project
          {...{
            title: "Previous online cv",
            description: "Old but gold",
            image: "",
          }}
        ></Project>
      </Section> */}
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
