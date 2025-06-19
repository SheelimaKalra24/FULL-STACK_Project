import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "./Context";
import "./Post.css";

const Post = ({ post }) => {
  
//   const navigate = useNavigate()

//   const postDelete = (id) =>{
//     const {fetchApi} = useContext(Context)
//     axios
//         .delete(`http://127.0.0.1:8000/${id}/`)
//         .then(() =>  {fetchApi()})
//         .catch((e) => console.log(e));
       
//   }
  const { fetchData } = useContext(Context);  // useContext should be used here at the top level
  const navigate = useNavigate();

  const postDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/${id}/`)
      .then(() => {
        fetchData(); 
      })
      .catch((e) => console.log(e));
  };

  return (
    <Card className="card-custom">
      <Card.Img
        variant="top"
        src={`http://127.0.0.1:8000/${post.image}`}
        className="card-img-custom"
      />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{post.title}</Card.Title>
        <Card.Text className="card-text">{post.des}</Card.Text>
        <Link to={`form/${post.id}/`}>
          <Button variant="primary" className="card-button">
            Edit
          </Button>
        </Link>
        <Button
          variant="danger"
          className="card-button"
          onClick={() => postDelete(post.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;