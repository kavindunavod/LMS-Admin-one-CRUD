import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material'; // Importing Material-UI components

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

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate(); // Corrected name for navigation
  const id  = useParams().id; // Destructuring id directly

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
      await axios
      .put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        description: String(inputs.description),
        category: String(inputs.category),
        credit: Number(inputs.credit),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitting form with inputs:", inputs);
    sendRequest().then(() => {
      navigate('/users');
    });
  };
  

  return (
    <div>
      <h1>Update User</h1>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <FormTitle>Update User</FormTitle>
          <TextField
            label="Name"
            name="name"
            value={inputs.name || ''}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="description"
            name="description"
            value={inputs.description || ''}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="category"
            name="category"
            value={inputs.category || ''}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="credit"
            name="credit"
            value={inputs.credit || ''}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <SubmitButton type="submit" variant="contained">
            Update
          </SubmitButton>
        </StyledForm>
      </FormContainer>
    </div>
  );
}

export default UpdateUser;
