
import styled from 'styled-components'
import Card from './Card'
const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    overflow-x : hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default ()=>{
    return  (
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    )
}