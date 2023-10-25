import styled from "styled-components";
import { Button,Box } from "@mui/material";
import Dp from '../assets/ParrotWallpaper.avif';
const Container = styled.div`
    width: 100vw;
    padding: 20px;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
`

const Top = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        justify-content: space-between;
    }
`
const ProfilePic = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    background-color: #5581de;
    border-radius: 100%;
    padding: 5px;
    overflow: hidden;
`
const Bio = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`

export default ()=>{
    return (
        <Container>
            <Top>

            <ProfilePic>
                <img src={Dp} style={{width:"100%",height:"100%",objectFit:"cover", borderRadius:"100%"}}></img>
            </ProfilePic>
            <Bio>
                <h2>Name</h2>
                <h4 style={{fontWeight:"normal"}}>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iste.</h4>
                <div>
                    <Button variant="contained" sx={{margin:"10px", minWidth:"100px"}}>Edit</Button>
                    <Button variant="contained" sx={{margin:"10px", minWidth:"100px"}}>Logout</Button>
            
                </div>
                
            </Bio>
            </Top>
            <Box display={"flex"} width={"100vw"} justifyContent={"space-evenly"}><Box>Saved</Box><Box>MyBlogs</Box></Box>
        </Container>
    )
}