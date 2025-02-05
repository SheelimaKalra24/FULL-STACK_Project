import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Context } from "./Context";


const Forms = () => {
  const {fetchData} = useContext(Context)
  const [state, setState] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    des: "",
    image: null,
  });
  const {id} = useParams();
  const navigate = useNavigate()

  
  

 
  
    if(id){
      try{
        useEffect(() => {
          axios
            .get(`http://127.0.0.1:8000/${id}/`)
            .then((value) => setFormData(value.data))
            .catch((value) => setError(value.error)); // Correctly set error message
        }, [id]);
      }
      catch{
        console.log("error")
      }
    }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImage = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const send = new FormData();
    send.append("title", formData.title);
    send.append("des", formData.des);
    send.append("image", formData.image);

    try{
      if(id){
        axios
        .put(`http://127.0.0.1:8000/${id}/`, send, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {fetchData()})
        .catch((e) => console.log(e));
        
      }
      else{
        axios
        .post("http://127.0.0.1:8000", send, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {fetchData()})
        .catch((e) => console.log(e));
      }
    }
    catch{
      console.log("error")
    }
    

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
