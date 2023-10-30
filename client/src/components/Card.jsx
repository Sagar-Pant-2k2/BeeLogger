
import styled from 'styled-components';
import dp from '../assets/PlaneBackground.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Container = styled.div`
color: white;
display: flex;
overflow: hidden;
white-space: pre-line;
    margin: 20px;
    border-radius: 20px;
    height: 200px;
   width: 800px;
    @media screen and (max-width:1000px){
        width: 600px;
    }
    @media screen and (max-width:600px){
        width: 500px;
        height: 150px;
    }
    @media screen and (max-width:500px){
        width: 300px;
        height: 125px;
    }
    background-color: #25262a;
    transition: transform 0.3s ease;
    transition: box-shadow 0.3s ease;
    &:hover{
        transform: scale(1.02);
        /* border: 2px solid red; */
        box-shadow: 0 0 20px 5px #3498db; 
    }
`
const Left = styled.div`
    flex: 4;
    padding: 5px;
    /* background-color: red; */
    flex-shrink: 0;
`
const Right = styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
overflow: hidden;

    flex: 7;
font-size: 20px;

`
const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    flex: 2;
    white-space: nowrap;
    text-overflow: ellipsis;

`
const DateTime = styled.div`
    flex: 1;
    font-size: 14px;
    width: 100%;
    color: #b1a8a8;
`
const Summary = styled.div`
    /* white-space: nowrap; */
    width: 100%; 
    flex: 3;
   overflow: hidden;
   color: #949290;
    

 
  
`
    

const Likes = styled.div`
    flex: 1;
    width: 100%;
    /* padding: 0 5px; */
    /* background-color: red; */
    display: flex;
    align-items: center ;
`
export default ()=>{
    return (
        <Container>
            <Left><img src={dp} style={{width:"100%",height:"100%",borderRadius:"20px",objectFit:"cover"}}></img></Left>
            <Right>
                <Title>
                    Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae ipsum, libero sed nisi dolorem optio architecto, sint qui fugiat vitae facilis amet porro aspernatur debitis veritatis accusamus unde blanditiis?
                </Title>
                <DateTime>
                    <p>created at xyz by xyz</p>
                </DateTime>
                
                <Summary>

                summary Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam suscipit accusamus voluptas quos doloribus enim esse corporis libero dicta aliquam omnis, ratione laborum, iure eius distinctio sed quam facere? elit. Dolor, cum!
                </Summary>
                <Likes><FavoriteIcon sx={{color:"white"}}></FavoriteIcon> xyz</Likes>
            </Right>

        </Container>
    )
}