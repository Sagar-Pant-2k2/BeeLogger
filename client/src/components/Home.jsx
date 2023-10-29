import { BottomNavigation, Box } from "@mui/material"
import Nav from "./Nav"
import styled from 'styled-components'
import Logo from "./Logo"
import Card from "./Card"
import ImgSrc from '../assets/ParrotWallpaper.avif'
import Gif from '../assets/typing.gif';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height:100vh;
    background-color: aliceblue;
    `
const Top = styled.div`
    min-height:100vh;
    width: 100vw;
    /* background-color: gold; */
    /* background-color: aliceblue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Mid = styled.div`
    min-height:50vh;
    width: 100vw;
    overflow: hidden;
    background-color: black;
    /* background-color: #e8566e; */
    color: white;
    /* background-color: #bbdaf6; */
    display: flex;
    /* flex-direction: column; */
    @media screen and (max-width:1000px){
        flex-direction: column;
    }
    align-items: center;
    justify-content: center;
    
`
const First = styled.div`
    flex: 1;
`
const Second = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
font-size: 20px;
font-weight: 2000;
font-family: cursive;
/* background-color: red; */
    flex: 1;
`

const H1 = styled.h1`
margin: 10px 0;
    @media screen and (max-width: 720px){
        font-size: 24px;
    }
`
export default ()=>{
    return (
        <Container>
        <Top>
        <Logo/><H1>Where Your Words Take Flight</H1>
        </Top>
        <Mid>
            <First>
                <img src={Gif} style={{objectFit:'cover'}}></img>
            </First>
            <Second>

<p>

        BeeLogger is your one-stop destination for the world of blogging, where creativity knows no bounds.
</p>
    <p>
     Our platform offers a user-friendly and intuitive space for individuals to not only craft their own compelling blogs but also discover and connect with a thriving community of writers and thinkers. 
    </p>    
     With BeeLogger, you can unleash your inner wordsmith and share your thoughts, stories, and ideas with the world. Whether you're a seasoned blogger or just dipping your toes into the blogosphere, our platform caters to all levels of expertise.
            </Second>
            
        </Mid>
        
        </Container>
    )
}