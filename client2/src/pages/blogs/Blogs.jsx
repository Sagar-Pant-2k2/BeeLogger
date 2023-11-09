import Card from './Card'
import Wrapper from "../../components/Wrapper"
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export default ()=>{
    return (
        <Wrapper>
            <Container>

                <Card>This is long card</Card>
                <Card>This is long card</Card>
                <Card>This is long card</Card>
                
            </Container>
            
        </Wrapper>
    )
}