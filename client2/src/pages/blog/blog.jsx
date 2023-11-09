import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../../context/Theme/Themes";
import tempImg from '../../../../client/src/assets/PlaneBackground.jpg';
import {AiOutlineHeart} from 'react-icons/ai';
const Container = styled.div`
    width: 100vw;
    /* overflow-x: scroll; */
    /* white-space: nowrap; */
    max-width: 720px;
    margin: auto;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: scroll;
    
`
const Title = styled.div`
display: flex;
align-items: center;
flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
    justify-content: center;
    color: ${(props) => props.theme.titleColor};
    
`
const Content = styled.div`
    padding: 30px 0;
    width: 100%;
    p {
        margin: 20px 0;
    }
    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.titleColor};

    }
    img {
        max-width: 720px;
        width: 100%;
        margin: 20px 0px;
    }
`;

const Writer = styled.div` 
    color: ${(props) => props.theme.notImportantText};
`

export default ()=>{
    const {currentContext} = useContext(ThemeContext);
    const theme = currentContext==='light'?lightTheme:darkTheme;
    return (
        <Wrapper>
            <Container>
                <Title theme={theme}>
                <h1>Title : Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolor.</h1>
                </Title>
                <Writer theme={theme}>sagar.date.x min read</Writer>
                
                <Content theme={theme}>
<h1>hii</h1>
<img src={tempImg}></img>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic cumque reprehenderit aspernatur illum accusantium error optio autem? Minus hic molestiae nesciunt laudantium fugit in, similique quasi ullam, temporibus quam voluptatem! Eveniet nemo debitis ab culpa tempora amet e animi?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste dolor sint saepe placeat! Cumque officia nemo sint aut veritatis repellat repellendus tempore? Quo, eum totam impedit alias asperiores praesentium.</p>
                <div style={{display:"flex",alignItems:"center"}}><AiOutlineHeart/> likecounts</div>
                </Content>
                </Container>
        </Wrapper>
    )
}