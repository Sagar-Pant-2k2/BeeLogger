import Wrapper from "../../components/Wrapper"
import Image from '../../../public/images/cartoon.jpg'
import styled from "styled-components"
import gradient from '../../../public/images/gradient.jpg'
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { darkTheme, lightTheme } from "../../context/Theme/Themes";
import Feature from "./Feature";
const Container = styled.div`
    padding: 200px 0;
    width: 100vw;
    /* background-color: red; */
    overflow: hidden;
    /* display: flex; */
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 20px; /* Set your desired border-radius */
    background-image: url(${gradient});
    /* object-fit: cover; */
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    min-width: 100px;
    min-height: 40px;
    color: ${(props) => props.theme.titleColor};
    font-weight: bold;
    background-color: #4ddba0;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
`;
export default ()=>{
    const {currentTheme} = useContext(ThemeContext);
    const theme = currentTheme==='light'?lightTheme:darkTheme
    return (
        <Wrapper>
            <Container>
                 <h1>Publish your passions, your way</h1>
                 <h3>Create a unique and beautiful blog easily. With our rich text editor</h3>
                 <Button theme={theme}>Create your own Blog</Button>
            </Container>
            {/* <img src={Image} style={{maxWidth:"100%"}}/> */}
            <Feature/>
        </Wrapper>
    )
}