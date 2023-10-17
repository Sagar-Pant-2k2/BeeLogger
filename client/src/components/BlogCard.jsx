import styled from 'styled-components'

const Container = styled.div`

    width: 350px;
    min-width:150px;
    background-color: black;
    height: 350px;
    border-radius: 15px;
    overflow: hidden;
    margin: 10px;
    display: flex;
    flex-direction: column;

    transition: transform 0.2s ease; /* Add a smooth transition effect for the scaling */

    &:hover {
        transform: scale(1.01); /* Enlarge the button by 10% on hover */
    }
`   
const Top = styled.div`
    flex: 2;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
`
const Bottom = styled.div`
    flex: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
`

const Author = styled.div`
    flex: 1;
    padding: 0px 10px;
    background-color: turquoise;
`
const Title = styled.div`
    flex: 3;
    font-weight: bold;
    font-size: 24px;
    padding: 0px 10px;
    overflow: hidden;
`
const Summary = styled.div`
    flex: 3;
    text-overflow: ellipsis;
    padding: 0px 10px;
    overflow: hidden;
`


export default ()=>{
    return (
    <Container>
        <Top>This is top</Top>
        <Bottom> <Author>Author | timeStamp</Author>
            <Title>
                Title Lorem ipsum, dolor sit amet consectetur adipisicing sdfgsdfgsdg Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ab.
            </Title>
            <Summary>summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia animi ex </Summary>
           
        </Bottom>
    </Container>
    )
}