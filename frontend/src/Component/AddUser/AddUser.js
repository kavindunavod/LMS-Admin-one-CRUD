import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
  padding: 20px;
`;

const StyledForm = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Lora', serif;
  color: #333;
`;

const SubmitButton = styled(Button)`
  && {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-transform: none;
    margin-top: 20px;
    &:hover {
      background-color: #45a049;
    }
  }
`;

function AddUser() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    credit: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate('/users'));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      name: String(input.name),
      description: String(input.description),
      category: String(input.category),
      credit: Number(input.credit),
    }).then(res => res.data);
  };

  return (
    <div>
      <Nav />
      
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <FormTitle>Details</FormTitle>
          <TextField
            label="Course Name"
            name="name"
            value={input.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={input.description}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={input.category}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Credit"
            name="credit"
            value={input.credit}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <SubmitButton type="submit" variant="contained">
            Add 
          </SubmitButton>
        </StyledForm>
      </FormContainer>
    </div>
  );
}

export default AddUser;
