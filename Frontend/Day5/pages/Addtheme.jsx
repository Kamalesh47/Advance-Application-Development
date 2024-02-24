import React, { useState } from 'react';
import '../assets/css/AddTheme.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addtheme() {
  const [deldata,setdelData]=useState();
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cost: '',
    imgurl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete=(e)=>
  {
    e.preventDefault();
    axios.delete(`http://localhost:8082/deleteTheme/${deldata}`)
    alert("delete successfully")
    navigate("/admin")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:8082/postTheme',formData)
    alert("added successfully")
    navigate("/admin")
  };
  const handleChangeDelete = (e) => {
    setdelData(e.target.value); 
  };
 
  return (
    <div className='addthemefull'>
    <div className="addthemecontainer">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea style={{width:"90%",padding:"10px",borderRadius:"5px"}} id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group" >
          <label htmlFor="cost">Cost:</label>
          <input style={{width:"90%",padding:"10px",borderRadius:"5px"}} type="number" id="cost" name="cost" value={formData.cost} onChange={handleChange} />
        </div>
        <div className='addtheme-button'>
        <button type="submit">Submit</button>
        </div>
      </form>
      <div>
      <br></br>
      <br></br>
      <h1 style={{textAlign:"center"}}>Delete Theme</h1>
      <br></br>
      
      <form onSubmit={handleDelete}>
      <div className="form-group" >
        <label>Name:</label>
        <input style={{ width: "90%", padding: "10px", borderRadius: "5px" }} type="text" name="deldata" value={deldata} onChange={handleChangeDelete} /> 
      </div>
      <div className='addtheme-button'>
        <button type="submit">Submit</button>
      </div>
    </form>
      </div>
    </div>
    </div>
  );
}

export default Addtheme;
