import React from 'react';
import Nav from '../Nav/Nav';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Wrapper to apply background color outside the border
const BackgroundWrapper = styled.div`
  background-color: #F0F0F0; /* Background color outside the border */
  padding: 0px; /* Adjust the padding to control the space outside the border */
  min-height: 100vh; /* Ensure the background covers the full height of the viewport */
`;

const Container = styled.div`
  padding: 10px;
  max-width: 1200px;
  
  margin: 0 auto;
  font-family: 'Lora', serif;
  border: 2px solid #2980B9;
  border-radius: 15px;
  background-color: #FFFFFF; /* Background color inside the border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Lora', serif;
  color: #2C3E50;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledImg = styled.img`
  width: 150px;
  height: auto;
`;

const IntroText = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  color: #34495E;
  margin-bottom: 50px;
  border: 1px solid #27AE60;
  padding: 15px;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #2980B9;
  margin-bottom: 20px;
`;

const DepartmentTitle = styled.h3`
  font-size: 22px;
  color: #27AE60;
  margin-top: 40px;
`;

const YearContainer = styled.div`
  margin-bottom: 30px;
  border: 1px solid #34495E;
  padding: 15px;
  border-radius: 10px;
`;

const StyledList = styled.ul`
  list-style-type: square;
  padding-left: 20px;
`;

const StyledListItem = styled.li`
  list-style-type: disc;
  font-size: 18px;
  color: #2C3E50;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3498DB;
  &:hover {
    text-decoration: underline;
  }
`;

function Home() {
  return (
    <BackgroundWrapper>
      <Nav />
      <Container>
        <Title>Learning Management System</Title>
        <FlexContainer>
          <StyledImg src={require('./university_logo.png')} alt="University Logo" />
        </FlexContainer>
        <IntroText>
          Welcome to the Learning Management System for the Students 2024/2025
          <br />
          සිසුන් සඳහා වූ අතථ්‍ය ඉගෙනුම් පරිස්ථිතියට ඔබව සාදරයෙන් පිළිගනිමු!
          <br />
          மாணவர்களை LMS ற்கு வரவேற்கிறோம்
        </IntroText>
        <SectionTitle>Courses</SectionTitle>

        <DepartmentTitle>SCS</DepartmentTitle>
        <YearContainer>
          <h4>Year 1</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester2">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

        <YearContainer>
          <h4>Year 2</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem2_1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester2_2">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

        <YearContainer>
          <h4>Year 3</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem3_1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester3_2">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

        <YearContainer>
          <h4>Year 4</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem4_1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester4_2">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

        <DepartmentTitle>IS</DepartmentTitle>
        <YearContainer>
          <h4>Year 1</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem1_1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester1_1">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

        <YearContainer>
          <h4>Year 2</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem2_2_1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester2_2_2">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

        <YearContainer>
          <h4>Year 3</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem3_3_1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester3_3_2">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

        <YearContainer>
          <h4>Year 4</h4>
          <StyledList>
            <StyledListItem><StyledLink to="/Sem4_4_1">Semester 1</StyledLink></StyledListItem>
            <StyledListItem><StyledLink to="/Semester4_4_2">Semester 2</StyledLink></StyledListItem>
          </StyledList>
        </YearContainer>

      </Container>
    </BackgroundWrapper>
  );
}

export default Home;
