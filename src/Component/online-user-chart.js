import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function OnlineUserChart() {
    // SampleOnlineUserData.js
const sampleOnlineUserData = [
    { time: '10:00 AM', onlineUsers: 20 },
    { time: '10:05 AM', onlineUsers: 25 },
    { time: '10:10 AM', onlineUsers: 30 },
    { time: '10:15 AM', onlineUsers: 35 },
    { time: '10:20 AM', onlineUsers: 40 },
    // Add more data points as needed
  ];
  

  
    return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={sampleOnlineUserData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="onlineUsers" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      );
}

export default OnlineUserChart