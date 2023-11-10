import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const SignupForm = styled.form`
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 1.2em;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
`;

const SignupButton = styled.button`
    background-color: #4ddba0;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
`;

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleSignup = async (e) => {
  e.preventDefault();
  const data = {
    username: username,
    email: email,
    password: password,
  };
  const apiUrl = 'http://localhost:3000/user/register';

  const jsonData = JSON.stringify(data);

  axios
    .post(apiUrl, jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      // Handle the response for successful registration
      console.log('Signup successful:', response.data);

      // Reset the form fields
      setUsername('');
      setEmail('');
      setPassword('');

      // You can also display a success message to the user
      alert('Registration successful! You can now log in.');
    })
    .catch((error) => {
      // Handle errors more gracefully
      console.error('Signup failed:', error);

      // Display an error message to the user based on the error response
      if (error.response) {
        if (error.response.status === 400) {
          alert('Registration failed: User with the same email already exists.');
        } else {
          alert('Registration failed: An error occurred. Please try again later.');
        }
      } else {
        alert('Network error: Unable to connect to the server.');
      }
    });
};


      

    return (
        <Wrapper>

        <SignupContainer>
            <SignupForm onSubmit={handleSignup}>
                <FormLabel htmlFor="username">Username:</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />

                <FormLabel htmlFor="email">Email:</FormLabel>
                <FormInput
                required
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />

                <FormLabel htmlFor="password">Password:</FormLabel>
                <FormInput
                required
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                <SignupButton type="submit">Sign Up</SignupButton>
            </SignupForm>
            already have an account ? <Link to="/login">try login</Link>
        </SignupContainer>

                    </Wrapper>
    );
};

export default SignupPage;
