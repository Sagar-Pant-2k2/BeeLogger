import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

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

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Email:", email);
        console.log("Password:", password);
        // Reset the form fields if needed
        setEmail("");
        setPassword("");
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
                    />

                <FormLabel htmlFor="password">Password:</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                <LoginButton type="submit">Log In</LoginButton>
            </LoginForm>
            new to platform ? <Link to="/register">register</Link>
        </LoginContainer>
                    </Wrapper>
    );
};

export default LoginPage;
