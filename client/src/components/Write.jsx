import { Button, Hidden } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #010c18;
  color: white;
  h1 {
    font-size: 2em;
    line-height: 1.1;
    /* margin: 0px 10px; */
  }
`;
const Preview = styled.p`
  margin: 20px;

  min-height: 20px;
  word-wrap: break-word;
  border-radius: 20px;
  white-space: wrap;
  img : {
    object-fit: cover;
  }
`;
export default () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "code"],
      [{ align: [] }],
      //   ['clean']
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code",
    "align",
  ];
  const handleSubmit = ()=>{
    const token = localStorage.getItem('token');
    {token?console.log(token):console.log("hemlo")}
  }
  return (
    <Container>
      <h1 style={{ margin: "0px 10px" }}>share your story here</h1>
      <p>
        <ReactQuill
          style={{ margin: "20px" }}
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </p>
      <h1 style={{ margin: "0px 10px" }}>Preview</h1>
      {value ? (
        <Preview dangerouslySetInnerHTML={{ __html: value }}></Preview>
      ) : (
        <p
          style={{
            margin: "20px",
            minHeight: "20px",
            borderRadius: "20px",
            whiteSpace: "wrap",
            color: "#686363",
          }}
        >
          Here you can see your Blog's preview
        </p>
      )}
      <Button sx={{ margin: "20px", color: "white" }} variant="outlined" onClick={handleSubmit}>
        Publish Blog
      </Button>
    </Container>
  );
};
