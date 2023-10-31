import styled from '@emotion/styled'
import {Box, Hidden, formHelperTextClasses} from '@mui/material'
import Drawer from './Drawer';
import Logo from './Logo'
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import { Auth } from '../context/Auth';
import {DrawerContext} from '../context/ShowDrawer';
import CloseIcon from '@mui/icons-material/Close';

const Nav = styled(Box)`
  width: 100vw;
  padding: 20px;
  /* background-color: #d4dadd; */
  box-shadow: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
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
const EditCloseIcon = styled(CloseIcon)`
    display: none;
    font-weight: bold;
    font-size: 36px;
    @media screen and (max-width:720px){
        display: block;
    }
`
export default ()=>{
    const {show,setShow} = useContext(DrawerContext);
    const {profile,loggedIn} = useContext(Auth);
    const {avatar} = profile;
  return (
    <Nav>
        <Left><Link to="/" style={{color:'inherit'}}><Logo/></Link></Left>
        <Right>
            <Link to="/blogs" style={{color:'inherit'}}>
            <h2>Blogs</h2>
            </Link>
            <Link to="/write" style={{color:'inherit'}}><h2>Write</h2></Link>
            {loggedIn?
            
            <Link to="/profile">
                {

                    avatar===""?
                    <AccountCircleIcon sx={{fontSize:"32px"}}/>
                    :
                <img src={avatar} style={{height:"36px",width:"36px",borderRadius:"50%"}}></img>
                }
            </Link>
            :
            <Link to="/signin" style={{color:'inherit'}}><h2 >Login</h2></Link>}
            
            {/* <MenuIcon/> */}
        </Right>
        <Box style={{display:'flex',alignItems:'center',height:'100%'}}>
            {show?<EditCloseIcon onClick={()=>{setShow(()=>!show)}}/>:<EditMenu onClick={()=>{setShow(()=>!show)}}/>
            }
            
        </Box>
    </Nav>
  )
}