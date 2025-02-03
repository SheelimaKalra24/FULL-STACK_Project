import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const Forms = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    des: "",
    image: null,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImage = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, formData]);
    const send = new FormData();
    send.append("title", formData.title);
    send.append("des", formData.des);
    send.append("image", formData.image);
    console.log(send);
    const response = axios
      .post("http://127.0.0.1:8000", send, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));

      setFormData(
        {
          title: "",
          des: "",
          image: null,
        }
      )
      
      navigate('/')
    
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        Title:{" "}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        Des:{" "}
        <input
          type="text"
          name="des"
          value={formData.des}
          onChange={handleChange}
        />
        <br />
        <br />
        Image: <input type="file" name="image" onChange={handleImage} />
        <br />
        <br />
        <button type="submit">Submit</button>
        <Link to={"/"}>
          <Button variant="primary" className="card-button">
            Back
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Forms;
