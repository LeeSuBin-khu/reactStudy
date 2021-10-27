import React, { useState } from "react";
import axios from "axios";
import { UploadDiv, UploadForm } from "./BlogCSS";

function BlogUpload(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!(Title && Content)) {
      alert("모든 값을 채워주세요");
      return;
    }

    let body = {
      title: Title,
      content: Content,
    };

    axios.post("/api/blog/upload", body).then((response) => {
        console.log(response)
      if (response.data.success) {
        props.history.push({
          pathname: "/",
        });
      }
    });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="Title">Title</label>
        <br />
        <input
          type="text"
          name="Title"
          value={Title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <br />
        <label htmlFor="content">Content</label>
        <br />
        <textarea
          type="text"
          name="content"
          value={Content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <br />
        <button type="submit" onClick={(e) => submitHandler(e)}>
          등록
        </button>
      </UploadForm>
    </UploadDiv>
  );
}

export default BlogUpload;