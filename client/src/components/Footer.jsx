import styled from '@emotion/styled'
import {Box, Hidden, formHelperTextClasses} from '@mui/material'
import Drawer from './Drawer';
import Logo from './Logo'
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import { Auth } from '../context/Auth';
const Nav = styled(Box)`
  width: 100vw;
  padding: 20px;
  background-color: #d4dadd;
  box-shadow: 2px solid black;
  display: flex;
  align-items: center;
  
  /* justify-content: center; */
`


export default ()=>{
    
  return (
    <Nav>
        
          This is Footer
    </Nav>
  )
}