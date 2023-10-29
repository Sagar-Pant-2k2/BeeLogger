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
    justify-content: center;
    @media screen and (max-width: 720px) {
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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export default () => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            [
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                {
                    'list': 'ordered'
                },
                {
                    'list': 'bullet'
                },
                { 'indent': '-1' }, { 'indent': '+1' }
            ],
            ['link', 'image'],
            ['clean'],
        ],
        handlers: {
            bold: () => {
                alert('Bold button clicked!');
            }
        }
    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list',
        'bullet', 'indent', 'link', 'image'
    ];

    const handleSubmit = () => {
        // Handle the submission of the content here
    }

    return (
        <Container>
            <Editor>
                <h2>Write</h2>
                <ReactQuill theme="snow" modules={modules} formats={formats} value={value} onChange={setValue} />
            </Editor>

            <Preview>
                <h2>Preview</h2>
                <div style={{ border: "2px solid black", height: "100%", padding: "0 20px", whiteSpace: 'pre-wrap', overflowWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: value }}></div>
                <Button sx={{ margin: "10px 0" }} variant='contained' onClick={handleSubmit}>Publish</Button>
            </Preview>
        </Container>
    )
}
