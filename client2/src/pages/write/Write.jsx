import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";

const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    img {
        /* max-width: 600px; Ensure images don't overflow their container */
        max-width: 600px;
        max-height: 400px;
        
        display: block; /* Remove default inline display */
        margin: 20px auto; /* Center-align images */
        /* object-fit: cover; */
    }
`;

const EditorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const TitleInput = styled.input`
    padding: 5px;
    margin-right: 10px;
    font-size: 1em;
`;

const ToggleButton = styled.button`
    background-color: #4ddba0;
    /* color: #fff; */
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const PreviewArea = styled.div`
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    /* background-color: #f9f9f9; */
    img {
        /* max-width: 600px; Ensure images don't overflow their container */
        max-width: 600px;
        max-height: 400px;
        
        display: block; /* Remove default inline display */
        margin: 0 auto; /* Center-align images */
        /* object-fit: cover; */
    }
`;

const TextEditor = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isPreviewMode, setPreviewMode] = useState(false);

    const handleChange = (value) => {
        setContent(value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const togglePreview = () => {
        setPreviewMode(!isPreviewMode);
    };

    return (
        <Wrapper>
            <EditorContainer>
                <EditorHeader>
                    <TitleInput
                        type="text"
                        placeholder="Enter title..."
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <ToggleButton onClick={togglePreview}>
                        {isPreviewMode ? "Switch to Editor" : "Switch to Preview"}
                    </ToggleButton>
                </EditorHeader>

                {isPreviewMode ? (
                    <PreviewArea>
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </PreviewArea>
                ) : (
                    <ReactQuill
                        value={content}
                        onChange={handleChange}
                        modules={TextEditor.modules}
                        formats={TextEditor.formats}
                        placeholder="Write something amazing..."
                        style={{color:"inherit"}}
                    />
                )}
            </EditorContainer>
            <button style={{margin:'10px 0px',padding:"10px"}}>Publish</button>
        </Wrapper>
    );
};

// Define modules and formats for the text editor
TextEditor.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
    // Additional modules can be added here
    // Example:
    // customModule: {
    //     // Custom module configuration
    // },
};

TextEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    // Additional formats can be added here
    // Example:
    // customFormat: {
    //     // Custom format configuration
    // },
];

export default TextEditor;
