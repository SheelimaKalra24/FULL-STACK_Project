import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

import Post from "./Post";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((value) => setData(value.data))
      .catch((value) => setError(value.error)); // Correctly set error message
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="page-container">
      <h1>Posts</h1>
      <Link to={'form/'}><Button variant="primary" className="card-button">
        Create Post
      </Button></Link>
      {data ? (<div style={{ display: "flex", flexWrap:'wrap' }} >{data.map((post, index) => (<Post key={index} post={post}/>))}</div>) : (<p>Loading...</p>)}
    </div>
  );
};

export default Posts;
