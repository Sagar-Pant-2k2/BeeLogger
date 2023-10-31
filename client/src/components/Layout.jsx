import { useContext } from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import { DrawerContext } from "../context/ShowDrawer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Auth } from '../context/Auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// TODO - Drawer is pushing content down :(
const Drawer = styled.div`

    align-items: center;
    display: none;
    justify-content: space-evenly;
    background-color: black;
    color: aliceblue;
    @media screen and (max-width:720px){
        display: flex;
    }
`

export default ({children})=>{
    const {profile,loggedIn} = useContext(Auth);
    const {avatar} = profile;
    
    const {show,setShow} = useContext(DrawerContext);
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
        <div className="content" onClick={()=>{show && setShow(()=>!show)}}>
        {children}
        </div>

        <Footer/>
        </>
    )
}