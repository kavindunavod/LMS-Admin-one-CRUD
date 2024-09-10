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


function Semester3_3_2() {
  return (
    <Container>
    <Title>Programming And Problem Solving  (PPS)</Title>
    <Subtitle>Learn the fundamentals of PPS with this introductory video.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="-c5XAmA5Oc4" />
    </StyledEmbed>

    <br></br><br></br><br></br>
        <Title>Ethics in Information Systems</Title>
    <Subtitle>Understand the ethical considerations in IS.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="_7uwcJj502Q" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Enterprise Architecture</Title>
    <Subtitle>Learn about Enterprise Architecture and its significance.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="g9DoRyjCQlA" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Data Warehousing</Title>
    <Subtitle>Introduction to Data Warehousing concepts in IS.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="oF_2uDb7DvQ" />
    </StyledEmbed>
  </Container>
  )
}

export default Semester3_3_2
