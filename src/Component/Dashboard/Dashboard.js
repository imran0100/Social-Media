// Dashboard.jsx

import React,{useState} from 'react';
import './Dashboard.css';
import OverviewIncomeGraph from '../overview-income-graph';
import UserIncreaseGraph from '../user-increase-graph';
import OnlineUserChart from '../online-user-chart';
import ContentUploadVChart from '../content-upload-chart';
import UserList from '../UserList/UserList';
import { Link } from 'react-router-dom';
import Posts from '../UserList/Posts/Posts';

const Dashboard = () => {
    const [timeRange, setTimeRange] = useState('weekly');
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
      <div className="section" style={{padding:"0"}}>
      <div><h2 style={{

    margin: "0 0 0rem 0",
    textAlign: "center"}}>Income</h2>
    
    </div>
      <div style={{textAlign:"end"}}>
     <div> <select className='select' onChange={(e) => setTimeRange(e.target.value)} value={timeRange}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select></div>
        <OverviewIncomeGraph data={monthlyData}/></div>
     
       
        </div>
  
        <div className="section section-content">
        <div className="gradient-box gradient-red"> <Link to="/users" className="absu">
            View All Users
          </Link><div><div>Total User</div><div className='size'>8982</div></div></div>
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
            <div className="gradient-box gradient4"><div><div>Previous Ad</div><div className='size'>12</div></div></div>
            <div className="gradient-box gradient5"><div><div>Total Hour</div><div className='size'>4624</div></div></div>
            <div className="gradient-box gradient6"><div><div>Total Ad Run</div><div className='size'>26</div></div></div>

      
        </div>
  
        <div className="section " style={{padding:"0"}}>
        {/* <OverviewIncomeGraph data={monthlyData}/> */}
        <h2 style={{

margin: "0 0 0rem 0",
textAlign: "center"}}>User Growth</h2>
<div style={{textAlign:"end"}}> <select className='select' onChange={(e) => setTimeRange(e.target.value)} value={timeRange}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select></div>
        <UserIncreaseGraph/>
        </div>
      </div>
      <div style={{display:"flex",gap:"1%"}}>
    <div style={{width:"100%", backgroundColor: "#f3f3f3"}}><h2 style={{margin:"0",textAlign:"center"}}>Online Users</h2><div style={{textAlign:"end"}}> <select className='select' onChange={(e) => setTimeRange(e.target.value)} value={timeRange}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select></div> <OnlineUserChart/></div>
    <div style={{width:"100%",backgroundColor: "#f3f3f3"}}><h2 style={{margin:"0 0 0 0",textAlign:"center"}}>Content Upload</h2><div style={{textAlign:"end"}}> <select className='select' onChange={(e) => setTimeRange(e.target.value)} value={timeRange}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select></div><ContentUploadVChart/></div>
  </div>
    </div>

    </>
  );
};

export default Dashboard;
