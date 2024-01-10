
import './App.css';

// App.js or where you define routes

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import UserList from './Component/UserList/UserList';
import Posts from './Component/UserList/Posts/Posts';
// import UserList from './UserList/UserList'; // Import the UserList component

const App = () => {
  return (
    <Router>
 <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<UserList/>} />
        <Route path="/users-post" element={<Posts/>} />


        {/* <Route path="/user-list" component={UserList} /> */}
        {/* Add other routes as needed */}
        </Routes>
    </Router>
  );
};

export default App;

