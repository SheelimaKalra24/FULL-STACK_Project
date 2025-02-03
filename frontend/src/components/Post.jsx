import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Post = ({post}) => {
  return (
    <Card  style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`http://127.0.0.1:8000${post.image}`}
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{post.title}</Card.Title>
                <Card.Text className="card-text">{post.des}</Card.Text>
                <Button variant="primary" className="card-button">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
  )
}

export default Post