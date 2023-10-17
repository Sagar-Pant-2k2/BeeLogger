import styled from 'styled-components'
import BlogCard from './BlogCard'

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:  wrap;
    /* background-color: red; */
    `
const Top = styled.div`
    width: 100vw;
    color: black;
    padding: 20px;
`
export default ()=>{
    return (
        <Container>
            <Top><h2>Categories</h2>  
            <button>all</button>
            <button>Tech</button>
            <button>Travel</button>
            <button>spirituality</button>
            </Top>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </Container>
    )
}