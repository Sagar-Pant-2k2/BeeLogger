import styled from 'styled-components'
import ImgSrc from '../assets/ParrotWallpaper.avif'
import FavoriteIcon from '@mui/icons-material/Favorite';
const Top = styled.div`
    width : 100%;    
    /* background-color: red; */
    /* height: 150px; */
    flex:1.5;
    overflow: hidden;
    /* text-overflow: hidden; */
    /* white-space: nowrap; */
    
`
const Bottom = styled.div`
    width: 100%;
    padding: 0px 10px;
    flex: 1;
    color: white;
    background-color: black;
    /* background-color: gold; */
    overflow: hidden;
    /* padding: 10px; */
`
const Likes = styled.div`
    width: 100%;
    padding: 2px 10px;
    direction: rtl;
    flex: 0.25;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
`

const Container = styled.div`
display: flex;
flex-direction: column;
    width: 350px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    /* background-color: red; */
    margin: 10px;
    box-shadow: 2px -5px 5px 0 #3a3a3a;
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.05);
     }
    @media screen and (max-width:700px){
        width: 250px;
    }
    
`
export default ()=>{
    return (
        <Container>
            <Top>
                <img src={ImgSrc} style={{objectFit:'cover',width:'100%',height:'100%'} }></img>
            </Top>
            <Bottom>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, molestias, eveniet tenetur architecto doloremque error commodi blanditiis id cumque eaque saepe asperiores quod voluptate distinctio libero atque officiis nemo eos non pariatur ipsa dicta est aspernatur. Deleniti, sequi eius vero dolores modi praesentium. Optio iure vero itaque amet, pariatur animi, magnam libero quas, magni maxime quidem dicta totam omnis officiis et aperiam id porro impedit illo minus nihil iusto voluptate ad? Suscipit neque animi quae dolores optio consequatur fuga id illo, dolorem officiis soluta cum, perferendis molestias beatae aliquid earum ipsum eaque itaque. Nihil assumenda quas in, voluptates expedita ex.</p>
            
            </Bottom>
            <Likes>5 <FavoriteIcon/> </Likes>

         </Container>
    )
}