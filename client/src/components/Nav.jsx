import styled from '@emotion/styled'
import {Box, Hidden, formHelperTextClasses} from '@mui/material'
import Drawer from './Drawer';
import Logo from './Logo'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
const Nav = styled(Box)`
  width: 100vw;
  padding: 20px;
  background-color: #d4dadd;
  box-shadow: 2px solid black;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Right = styled.div`
flex: 1;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width:720px){
        display: none;
    }
`

const EditMenu = styled(MenuIcon)`
    display: none;
    font-weight: bold;
    font-size: 36px;
    @media screen and (max-width:720px){
        display: block;
    }
`
export default ()=>{
    const [show,setShow] = useState(false);
    const [auth,setAuth] = useState(false);
  return (
    <Nav>
        <Left><Link to="/" style={{color:'inherit'}}><Logo/></Link></Left>
        <Right>
            
            <h2>Blogs</h2>
            <Link to="/write"><h2 style={{color:'black'}}>Write</h2></Link>
            {auth?<Link to="/profile"><AccountCircleIcon sx={{fontSize:"32px",color:'black'}}/></Link>:<Link to="/signin"><h2 style={{color:'black',textDecoration:'none'}}>Login</h2></Link>}
            
            {/* <MenuIcon/> */}
        </Right>
        <Box style={{display:'flex',alignItems:'center',height:'100%'}}>
            <EditMenu onClick={()=>{setShow(()=>!show)}}/>
            {show && <Drawer/>}
        </Box>
    </Nav>
  )
}