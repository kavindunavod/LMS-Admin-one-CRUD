import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Detail = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;

  span {
    font-weight: bold;
    color: #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: #007BFF;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const UpdateLink = styled(Link)`
  background-color: #28a745;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

function AddUser(props) {
  const { _id = 'N/A', name = 'N/A', description = 'N/A', category = 'N/A', credit = 'N/A' } = props.user || {};

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(res => res.data)
      .then(() => history("/"))
      .then(() => history("/users"));
  }

  return (
    <Container>
      <Title>Course Details</Title>
      <Detail><span>ID:</span> {_id}</Detail>
      <Detail><span>Name:</span> {name}</Detail>
      <Detail><span>Description:</span> {description}</Detail>
      <Detail><span>Category:</span> {category}</Detail>
      <Detail><span>Credit:</span> {credit}</Detail>
      <ButtonContainer>
        <UpdateLink to={`/users/${_id}`}>Update</UpdateLink>
        <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
      </ButtonContainer>

    </Container>
  );
}

export default AddUser;
