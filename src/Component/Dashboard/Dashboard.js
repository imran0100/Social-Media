// Dashboard.jsx

import React from 'react';
import './Dashboard.css';
import OverviewIncomeGraph from '../overview-income-graph';
import UserIncreaseGraph from '../user-increase-graph';

const Dashboard = () => {
 
    const monthlyData = [
        {
          // first week 2nd week labels
      
          name: "1-7",
          amt: 400,
        },
        {
          name: "8-14",
          amt: 1210,
        },
        {
          name: "15-21",
          amt: 3290,
        },
        {
          name: "22-28",
          amt: 600,
        },
        {
          name: "29-30",
          amt: 200,
        },
      ];
  return (
    <>
    <div className="dashboard-container">
      <div className='container'>
      <div className="section">
      <div><h1 style={{

    margin: "0 0 1rem 0",
    textAlign: "center"}}>Income</h1></div>
      <div><OverviewIncomeGraph data={monthlyData}/></div>
      
        </div>
  
        <div className="section section-content">
        <div className="gradient-box gradient-red"><div><div>Total User</div><div className='size'>8982</div></div></div>
            <div className="gradient-box gradient-yellow"><div><div>Today Online User</div><div className='size'>473</div></div></div>
            <div className="gradient-box gradient-pink"><div><div>Today Post</div><div className='size'>87</div></div></div>
            <div className="gradient-box gradient-teal"><div><div>Today Post</div><div className='size'>12</div></div></div>
        </div>
      </div>

      {/* Add more sections as needed */}
      <div className='container'>
      <div className="section section-content">
      <div className="gradient-box gradient1"><div><div>Today Ad</div><div className='size'>65</div></div></div>
            <div className="gradient-box gradient2"><div><div>Activ Ad</div><div className='size'>12</div></div></div>
            <div className="gradient-box gradient3"><div><div>Total Campaign</div><div className='size'>12</div></div></div>
            <div className="gradient-box gradient4"><div><div>Activ Ad</div><div className='size'>12</div></div></div>
            <div className="gradient-box gradient5"><div><div>Total Hour</div><div className='size'>4624</div></div></div>
            <div className="gradient-box gradient6"><div><div>Total Ad Run</div><div className='size'>26</div></div></div>

      
        </div>
  
        <div className="section ">
        {/* <OverviewIncomeGraph data={monthlyData}/> */}
        <UserIncreaseGraph/>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Dashboard;
