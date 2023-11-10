import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LoginForm = styled.form`
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
    /* background-color: */
`;

const LoginButton = styled.button`
    background-color: #4ddba0;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
`;

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
          email: email, // Assuming the user logs in with their email
          password: password,
        };
        const apiUrl = 'http://localhost:3000/user/login';
      
        const jsonData = JSON.stringify(data);
      
        try {
          const response = await axios.post(apiUrl, jsonData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          // Handle the response for successful login
          console.log('Login successful:', response.data);
      
          // Perform any actions you need upon successful login
      
          // Use a programmatic navigation method, e.g., React Router's useHistory
          // For example, if you're using React Router v6:
          // import { useNavigate } from 'react-router-dom';
          // const navigate = useNavigate();
          navigate('/');
      
        } catch (error) {
          console.error('Login failed:', error);
      
          // Display an error message to the user based on the error response
          if (error.response) {
            if (error.response.status === 401) {
              alert('Login failed: Invalid credentials.');
            } else {
              alert('Login failed: An error occurred. Please try again later.');
            }
          } else {
            alert('Network error: Unable to connect to the server.');
          }
        }
      };
      

    return (
        <Wrapper>

        <LoginContainer>
            <LoginForm onSubmit={handleLogin}>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />

                <FormLabel htmlFor="password">Password:</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />

                <LoginButton type="submit" onClick={handleLogin}>Log In</LoginButton>
            </LoginForm>
            new to platform ? <Link to="/register">register</Link>
        </LoginContainer>
                    </Wrapper>
    );
};

export default LoginPage;
