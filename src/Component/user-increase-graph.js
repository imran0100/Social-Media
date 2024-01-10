import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



function UserIncreaseGraph() {
    const data = [
        { month: 'January', users: 0 },
        { month: 'February', users: 100 },
        { month: 'March', users: 200 },
        { month: 'April', users: 278 },
        // Add more months and user data as needed
      ];
      

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default UserIncreaseGraph
