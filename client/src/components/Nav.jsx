import styled from "styled-components";
import Button from "./Button";
const Container = styled.div`
    width: 100vw;
    padding: 10px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    @media screen and (max-width: 650px) {
        flex-direction   : column;
    }
`
const Left = styled.div`
    flex:1
`
const Right = styled.div`
    flex: 1;
    display: flex;
    direction: rtl;
    @media screen and (max-width: 650px) {
        direction   : ltr ;
        margin:50px;
    }
    
`

export default ()=>{
    return (
        <Container>
        <Left>
        <h1>BEE LOGGER</h1>
        </Left>
        <Right>
        <Button>Login</Button>
        <Button>Write</Button>
        
        </Right>
        </Container>
    )
}