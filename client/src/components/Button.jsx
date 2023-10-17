import styled from "styled-components";

const Button = styled.button`

    padding: 10px;
    margin: 0px 10px;
    background-color: #303038;
    color: #f4d0d0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{background-color:#1e1e23; color:#d1c7c7;} 

`
export default ({children,handleClick})=>{
    return <Button onClick={handleClick}>{children}</Button>
}