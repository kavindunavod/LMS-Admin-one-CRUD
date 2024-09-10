import React from 'react';
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


function Sem1() {
  return (
    <Container>
      <Title>Rapid Application Development (RAD)</Title>
      <Subtitle>Learn the fundamentals of RAD with this introductory video.</Subtitle>
      <StyledEmbed>
        <YoutubeEmbed embedId="4s0v4BaY5c0" />
      </StyledEmbed> 

      <br></br><br></br><br></br>
      <Title>Mathematical methods(MM)</Title>
      <Subtitle>Learn the fundamentals of MM with this introductory video.</Subtitle>
      <StyledEmbed>
        <YoutubeEmbed embedId="K5H6IAeKL6M" />
      </StyledEmbed>

      <br></br><br></br><br></br>
      <Title>Statistics</Title>
      <Subtitle>Learn the fundamentals of statistics with this introductory video.</Subtitle>
      <StyledEmbed>
        <YoutubeEmbed embedId="MXaJ7sa7q-8" />
      </StyledEmbed>

      
      <br></br><br></br><br></br>
      <Title>Statistics</Title>
      <Subtitle>Learn the fundamentals of statistics with this introductory video.</Subtitle>
      <StyledEmbed>
        <YoutubeEmbed embedId="bydeAhoctdU" />
      </StyledEmbed>
      </Container>

    

   
  );
}

export default Sem1;
