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


function Sem3_3_1() {
  return (
    <Container>
    <Title>Mobile Application Devolopment (MAD)</Title>
    <Subtitle>Learn the fundamentals of MAD with this introductory video.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="iqI6MAsi1Xg" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Decision Support Systems (DSS)</Title>
    <Subtitle>Learn how DSS supports decision-making in IS.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="k31CSoO7wC4" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Artificial Intelligence in Information Systems</Title>
    <Subtitle>Introduction to AI's role in Information Systems.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="BYBFrJ1ivpc" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Knowledge Management Systems (KMS)</Title>
    <Subtitle>Explore Knowledge Management Systems in IS.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="-XPbfsl3WGo" />
    </StyledEmbed>
  </Container>
  )
}

export default Sem3_3_1
