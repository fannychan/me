import React from "react";
import Github from "../images/github.svg";
import Email from "../images/email.svg";
import Linkedin from "../images/linkedin.svg";
import { SkillBlock } from "../components/SkillBlock";
import { Section } from "../components/styles";

export const Home = () => {
  return (
    <>
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
          <img src={Linkedin} style={{ height: "45px", marginRight: "10px" }} />
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
    </>
  );
};
