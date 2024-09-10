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

function Sem4_4_1() {
  return (
    <Container>
    <Title>Natural Language Processing  (NLP)</Title>
    <Subtitle>Learn the fundamentals of NLP with this introductory video.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="-c5XAmA5Oc4" />
    </StyledEmbed>

    <br></br><br></br><br></br>
        <Title>Information Systems Auditing</Title>
    <Subtitle>Understand the process of IS Auditing.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="X74HUU9eLW0" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Big Data Analytics</Title>
    <Subtitle>Explore Big Data Analytics in Information Systems.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="bY6ZzQmtOzk" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Mobile Information Systems</Title>
    <Subtitle>Learn about Mobile Information Systems and applications.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="QmjoPnoUhXo" />
    </StyledEmbed>
  </Container>
  )
}

export default Sem4_4_1
