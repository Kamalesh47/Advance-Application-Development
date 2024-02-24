import React from 'react';
import { Link } from 'react-router-dom';
const CollegeList = ({ colleges, isAdmin, onDelete, onUpdate }) => {
  return (
    
    <div style={{ textAlign: 'center' }}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h2>Event Management</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {colleges.map((college) => (
          <li key={college.id} style={{ marginBottom: '40px' }}>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={college.image}
                  style={{ width: '500px', height: '300px', marginBottom: '10px', borderRadius: '10px' }}
                />
                <strong style={{ fontSize: '20px' }}>{college.name}</strong>
                <p style={{ fontSize: '16px' ,justifyContent:'center'}}>{college.description}</p>
                <strong style={{ fontSize: '20px' }}>{college.cost}</strong>
              </div>
            </Link>
            {isAdmin && (
              <div>
                <button onClick={() => onDelete(college.id)} className='mr-7' style={{backgroundColor:'green'}}>Delete</button>
                <button
                  onClick={() =>
                    onUpdate(
                      college.id,
                      prompt('Enter new name:', college.name),
                      prompt('Enter new image URL:', college.image),
                      prompt('Enter the cost',college.cost),
                      prompt('Enter new description:', college.description)
                    )
                  }
                  style={{backgroundColor:'blue'}}>
                  Update
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;