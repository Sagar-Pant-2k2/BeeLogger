
import styled from 'styled-components';
import dp from '../assets/PlaneBackground.jpg';
const Container = styled.div`
display: flex;
overflow: hidden;
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
    }
    background-color: #c0d4d4;
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
white-space: nowrap;
    flex: 7;
font-size: 20px;
text-overflow: ellipsis;
`
const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    flex: 2;

`
const DateTime = styled.div`
    flex: 1;
    font-size: 14px;
    width: 100%;
    color: #383333;
`
const Summary = styled.div`

    width: 100%; 
    flex: 3;
 
  
`
    

const Likes = styled.div`
    flex: 1;
    width: 100%;
    padding: 0 5px;
`
export default ()=>{
    return (
        <Container>
            <Left><img src={dp} style={{width:"100%",height:"100%",borderRadius:"20px",objectFit:"cover"}}></img></Left>
            <Right>
                <Title>
                    Title
                </Title>
                <DateTime>
                    <p>created at xyz by xyz</p>
                </DateTime>
                
                <Summary>

                summary Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam suscipit accusamus voluptas quos doloribus enim esse corporis libero dicta aliquam omnis, ratione laborum, iure eius distinctio sed quam facere? elit. Dolor, cum!
                </Summary>
                <Likes>Likes</Likes>
            </Right>

        </Container>
    )
}