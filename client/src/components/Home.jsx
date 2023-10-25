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
    `
const Top = styled.div`
    min-height:100vh;
    width: 100vw;
    background-color: gold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Bottom = styled.div`
    
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url({ImgSrc});
    
    /* background-color: #ed9cc0; */
    
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
        <Bottom>
            {/* <img src={ImgSrc    }alt="fuck you"></img> */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Bottom>
        </Container>
    )
}