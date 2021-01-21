import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Section } from "../components/styles";
import { Artist } from "../data/models";
import { Card } from "../components/Card";
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const KnowMePage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://0piyb5pvnf.execute-api.eu-north-1.amazonaws.com/v1/me/artists"
      );
      if (response.status === 200) {
        setArtists(response.data.items.slice(0, 10));
      }
    };
    getData();
  }, []);

  return (
    <>
      <Section flat color={"#f6f9fc"}>
        <h1>Get to know me...</h1>

        <h2>in music</h2>
        <p>
          My most played artist the last 6 months. Data is fetched from Spotify.
          More interested in the code? See my <a href="https://github.com/fannychan/me-bae">github repository</a>.
        </p>
        <StyledDiv>
          {artists.map((artist) => {
            return (
              <Card
                key={artist.name}
                imageUrl={artist.images[2].url}
                name={artist.name}
                genres={artist.genres.slice(0, 2)}
              ></Card>
            );
          })}
        </StyledDiv>
      </Section>
      {/* <Section>
        <h2>in emoji</h2>
        <p>My most common used emojis</p>
        <span style={{fontSize: '42px'}}>

        🤦🏻‍♀️😍🤔😌🔥💕🙈
        </span>
        <StyledDiv></StyledDiv>
      </Section> */}
      {/* <Section color={'white'}>
        <h2>by places I've been to</h2>
        <p>My most common used emojis</p>
        <StyledDiv></StyledDiv>
      </Section> */}
    </>
  );
};
