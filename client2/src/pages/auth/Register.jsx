import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";

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

    const handleSignup = (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        // Reset the form fields if needed
        setUsername("");
        setEmail("");
        setPassword("");
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
                    />

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

                <SignupButton type="submit">Sign Up</SignupButton>
            </SignupForm>
            already have an account ? <Link to="/login">try login</Link>
        </SignupContainer>

                    </Wrapper>
    );
};

export default SignupPage;
