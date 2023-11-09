import { useContext, useState } from "react";
import { darkTheme,lightTheme } from "../context/Theme/Themes";
import { ThemeContext } from "../context/Theme/ThemeContext";
import styled from 'styled-components';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {MdLightMode,MdModeNight} from 'react-icons/md';
import { Link } from "react-router-dom";

const Container = styled.div`
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px 10px #2b292991;
    background-color: ${(props) => props.theme.contrastBgColor};
    color: ${(props) => props.theme.titleColor};
    
   
`
const Drawer = styled.div`

display: none;
/* height: 100vh; */
/* z-index: 100; */
position: relative;
background-color: ${(props)=>props.theme.contrastBgColor};
color: ${(props)=>props.theme.textColor};
width: 100%;
right: 0;
@media screen and (max-width : 720px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

`
const Icontainer = styled.div`
    display: none;
    @media screen and (max-width : 720px){
        display: block;
    }
`
const Left = styled.div`padding: 10px; flex:1; display:flex; align-items:center; justify-content:space-between`;

const Right = styled.div`
padding: 10px; flex:1; display:flex; justify-content:flex-end; h2{margin:0px 10px}
align-items: center;

@media screen and (max-width: 720px){
        display: none;
    }
`;

export default ()=>{
    const {currentTheme,toggleTheme} = useContext(ThemeContext);
    const theme =  (currentTheme==='light')?lightTheme:darkTheme;
    const [drawer,setDrawer] = useState(false);
    const toggleDrawer = (e)=>{setDrawer(()=>{
        return drawer===false?true:false})}
    return (<>
        <Container theme={theme}>
        <Left>
        <Link style={{color:"inherit", textDecoration:"none"}} to="/"><div style={{display:"flex"}}><h1>Bee</h1><h1 style={{color:"#3189cc"}}>Logg</h1><h1>er</h1></div>
        </Link>
        {
            <Icontainer onClick={toggleDrawer}>
            {!drawer?
                <h1><AiOutlineMenu/></h1>:
                <h1><AiOutlineClose/></h1>
            }
            </Icontainer>}</Left>
            <Right>
            <Link to="/blogs" style={{color:"inherit",textDecoration:"none"}}><h2>Blogs</h2></Link>
            <Link to="/write" style={{color:"inherit",textDecoration:"none"}}><h2>Write</h2></Link>
            <Link to="/login" style={{color:"inherit",textDecoration:"none"}}><h2>Login</h2></Link>
            
            
            
            
            <h2 onClick={()=>toggleTheme()}>{currentTheme==='light'?<MdModeNight/>:<MdLightMode/>}</h2>
            </Right>
            </Container>
            {drawer?
                <Drawer theme={theme}>
                <Link to="/blogs" style={{color:"inherit",textDecoration:"none"}}><h3>Blogs</h3></Link>
            <Link to="/write" style={{color:"inherit",textDecoration:"none"}}><h3>Write</h3></Link>
            <Link to="/login" style={{color:"inherit",textDecoration:"none"}}><h3>Login</h3></Link>
            
            
            
            
            <h3 onClick={()=>toggleTheme()}>{currentTheme==='light'?"Night Mode":"Day Mode"}</h3>
                </Drawer>:<></>}
            </>
            )
        }