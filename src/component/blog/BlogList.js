import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import BlogCard from "./BlogCard";

function BlogList() {
  const [List, setList] = useState([]);

  useEffect(() => {
    axios.post("/api/blog/getList").then((response) => {
      if (response.data.success) {
        setList([...response.data.list]);
      }
    });
  }, []);

  return (
    <>
      <BlogCard List={List} />

      <Link to="/blogUpload">
        <button>게시하기</button>
      </Link>
    </>
  );
}

export default withRouter(BlogList);