import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #010c18;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
   text-align: center;
`

export default ()=>{
    return  (
        <Container>
            <h1>404</h1>
            

            <h2 style={{margin:"10px"}}>Page not found :( &nbsp; / &nbsp; Service not available at the moment 💔</h2> 
            
        </Container>
    )
}