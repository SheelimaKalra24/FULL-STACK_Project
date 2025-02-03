import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState(
    {
      'title': '',
      'des': '',
      'image': ''
    }
  );

  const [submissions, setSubmissions] = useState([]);

  const handleChage =(e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      // console.log(formData)
      setSubmissions([...submissions, formData]);

      setFormData({ title: '', des: '', image: '' });
  };

    return (
      <div>
        <h1>{formData.title}</h1>
        
    <form onSubmit={handleSubmit}>
        
        <label>
          Title:
          <input type="text"
          placeholder="Enter title" 
          name='title'
          value={formData.title}
          onChange={handleChage}/>
        </label>

        <br />
        <br/>

        <label>
          Description:
          <input type="text"
          placeholder="Enter description"
          name='des'
          value={formData.des}
          onChange={handleChage}/>
        </label>

        <br />
        <br />

        <label>
          Image: 
          <input type="file" 
          name='image'
          value={formData.image}
          onChange={handleChage}/>
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>
    </form>
    <h2>Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>
            Title: {submission.title} <br />
            Description: {submission.des} <br />
            Image: {submission.image } <br />
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default Form;