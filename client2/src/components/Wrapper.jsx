import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme/ThemeContext";
import { darkTheme, lightTheme } from "../context/Theme/Themes";

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    h1,h2,h3,h4,h5,h6 {
        color : ${(props)=>props.theme.titleColor};
    }
    padding: 10px 20px;
    input  {
        color: ${(props)=>props.theme.textColor};
         background-color: ${(props)=>props.theme.secondaryBgColor};
        
    }
    button {
        padding: 10px;
        color: ${(props)=>props.theme.textColor};
        background-color: ${(props)=>props.theme.secondaryColor};
        border-radius: 5px;
    }
`

export default ({children})=>{
    const {currentTheme} = useContext(ThemeContext);
    const theme = currentTheme==='light'?lightTheme:darkTheme;
    return (
        <Container theme={theme}>
            {/* <input></input> */}
            {children}
        </Container>
    )
}