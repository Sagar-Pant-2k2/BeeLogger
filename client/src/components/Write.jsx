import styled from 'styled-components'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { Button } from '@mui/material';
const Container = styled.div`
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    height: auto;

    /* align-items: center; */
    justify-content: center;
    @media screen and (max-width:720px){
        flex-direction: column;
    }
`
const Editor = styled.div`
    width: 50%;
   
    padding: 10px;

   flex-direction: column;
`
const Preview = styled.div`
    width: 50%;
    padding: 10px;
    /* background-color: green; */
   
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    
`

export default ()=>{
    const [value,setValue] = useState('');
    const handleSubmit = ()=>{

    }
    return (
        <Container>
            <Editor>
                <h2>Write</h2>
                <ReactQuill 
                theme='snow' 
                value={value} 
                onChange={setValue}
                style={{width:"100%"}}
                >
                </ReactQuill>
            </Editor>
            
            <Preview >
                <h2>Preview</h2>
                <div style={{border: "2px solid black",height:"100%",padding:"0 20px",whiteSpace:'pre-wrap'}} dangerouslySetInnerHTML={{__html:value}}></div>
                <Button sx={{margin:"10px 0"}} variant='contained' onClick={handleSubmit}>Publish</Button>
            </Preview>
        </Container>
    )

}