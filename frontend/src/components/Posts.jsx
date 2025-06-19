import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

import Post from "./Post";
import { Link } from "react-router-dom";
import { Context } from "./Context";

const Posts = () => {
  const {data} = useContext(Context)
  
  const [error, setError] = useState(null);

  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="page-container">
      <h1 className="main-heading">
        <span role="img" aria-label="post">📝</span> {"Posts".split("").map((l, i) => <span key={i}>{l}</span>)}
      </h1>
      <div style={{ display: "flex", justifyContent: "center", margin: "18px 0 28px 0" }}>
        <Link to={'form/'}>
          <Button variant="primary" className="card-button">
            Create Post
          </Button>
        </Link>
      </div>
      {data ? (<div style={{ display: "flex", flexWrap:'wrap' }} >{data.map((post, index) => (<Post key={index} post={post}/>))}</div>) : (<p>Loading...</p>)}
    </div>
  );
};

export default Posts;
