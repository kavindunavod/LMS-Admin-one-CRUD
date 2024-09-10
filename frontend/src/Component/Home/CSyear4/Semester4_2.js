import React from 'react'
import styled, { keyframes } from 'styled-components';
import YoutubeEmbed from '../../../YoutubeEmbed';



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background: linear-gradient(to bottom right, #f0f4f8, #d9e2ec);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in;
  max-width: 800px;
  margin: 50px auto;
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const StyledEmbed = styled.div`
  margin-top: 20px;
     iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

   position: relative;
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
`;

function Semester4_2() {
  return (
    <Container>
    <Title>Computer System (CS)</Title>
    <Subtitle>Learn the fundamentals of CS with this introductory video.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="qfUZBKDh9BY" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Computer Architecture</Title>
    <Subtitle>Understand the basics of Computer Architecture.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="_cR0_BAr5qc" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Cryptography and Network Security</Title>
    <Subtitle>Get started with Cryptography and Network Security.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="ZDnShu5V99s" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Compiler Design</Title>
    <Subtitle>Learn about Compiler Design and its processes.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="5ZmFlxrNaN8" />
    </StyledEmbed>
  </Container>
  )
}

export default Semester4_2
