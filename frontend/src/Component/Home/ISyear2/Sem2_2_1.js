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

function Sem2_2_1() {
  return (
    <Container>
    <Title>Software Engineering (SE)</Title>
    <Subtitle>Learn the fundamentals of SE with this introductory video.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="Lz6kcCAWJeo" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Cloud Computing</Title>
    <Subtitle>An introduction to Cloud Computing in Information Systems.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="_a6us8kaq0g" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Data Mining</Title>
    <Subtitle>Understand the basics of Data Mining in IS.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="7rs0i-9nOjo" />
    </StyledEmbed>

    <br></br><br></br><br></br>
    <Title>Information Systems Project Management</Title>
    <Subtitle>Learn about Project Management in IS.</Subtitle>
    <StyledEmbed>
      <YoutubeEmbed embedId="FRUJxiQfGnk" />
    </StyledEmbed>
  </Container>


  )
}

export default Sem2_2_1

