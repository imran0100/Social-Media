// UserList.jsx

import React from 'react';
import './UserList.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const userData =[
    { "id": 1, "name": "John Doe", "username": "john.doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "username": "jane.doe", "email": "jane@example.com" },
    { "id": 3, "name": "Alice Smith", "username": "alice.smith", "email": "alice@example.com" },
    { "id": 4, "name": "Bob Johnson", "username": "bob.johnson", "email": "bob@example.com" },
    { "id": 5, "name": "Eva Williams", "username": "eva.williams", "email": "eva@example.com" },
    { "id": 6, "name": "Michael Brown", "username": "michael.brown", "email": "michael@example.com" },
    { "id": 7, "name": "Olivia Davis", "username": "olivia.davis", "email": "olivia@example.com" },
    { "id": 8, "name": "Daniel Wilson", "username": "daniel.wilson", "email": "daniel@example.com" },
    { "id": 9, "name": "Sophia Moore", "username": "sophia.moore", "email": "sophia@example.com" },
    { "id": 10, "name": "Liam Lee", "username": "liam.lee", "email": "liam@example.com" }
  ]
  

const UserList = () => {
  return (
    <div className="user-list-container">
     
      <div className="user-list">
        {userData.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
           <div className='view-post'><Link to="/users-post">View Posts</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
