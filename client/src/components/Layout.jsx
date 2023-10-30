import { useContext } from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import { DrawerContext } from "../context/ShowDrawer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Auth } from '../context/Auth';


const Drawer = styled.div`

    align-items: center;
    display: flex;
    justify-content: space-evenly;
    background-color: black;
    color: aliceblue;
`

export default ({children})=>{
    const {profile,loggedIn} = useContext(Auth);
    const {avatar} = profile;
    
    const {show} = useContext(DrawerContext);
    return (
        <>
        <Nav/>
        {show && 
        <Drawer>
           
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
    
        </Drawer>
        }
        {children}
        <Footer/>
        </>
    )
}