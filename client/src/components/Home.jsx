import { BottomNavigation, Box } from "@mui/material"
import Nav from "./Nav"
import styled from 'styled-components'
import Logo from "./Logo"
import Card from "./Card"
import ImgSrc from '../assets/ParrotWallpaper.avif'
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
    min-height:100vh;
    width: 100vw;

    /* background-color: #bbdaf6; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
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
            <div className="first">

            </div>
            <div className="second">

        BeeLogger is your one-stop destination for the world of blogging, where creativity knows no bounds. Our platform offers a user-friendly and intuitive space for individuals to not only craft their own compelling blogs but also discover and connect with a thriving community of writers and thinkers. With BeeLogger, you can unleash your inner wordsmith and share your thoughts, stories, and ideas with the world. Whether you're a seasoned blogger or just dipping your toes into the blogosphere, our platform caters to all levels of expertise. Create thought-provoking content, engage with fellow bloggers, and foster connections by following your favorite writers. BeeLogger is more than just a blogging platform; it's a dynamic, interactive space where ideas flourish, voices are heard, and communities are built around the art of storytelling. Join us and embark on a journey of self-expression and exploration through the power of words.
            </div>
            
        </Mid>
        
        </Container>
    )
}