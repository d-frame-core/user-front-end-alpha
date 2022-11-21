import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Jan",
    
    dft: 24,
    amt: 100,
  },
  {
    name: "Feb",
    
    dft: 13,
    amt: 100
  },
  {
    name: "Mar",
  
    dft: 98,
    amt:100
    
  },
  {
    name: "Apr",
    
    dft: 39,
    amt:100
  },
  {
    name: "May",
    
    dft: 48,
    amt:100
  },
  {
    name: "June",
    
    dft: 30,
    amt:100
  },
  {
    name: "July",
    
    dft: 30,
    amt:100
  },
  {
    name: "Aug",
    
    dft: 30,
    amt:100
  },
  {
    name: "Sept",
    
    dft: 30,
    amt:100
  },
  {
    name: "Oct",
    
    dft: 30,
    amt:100
  },

];

export default function Linecharts() {
  return (
    <ResponsiveContainer height={300} width={700} >
    <LineChart className="linechart1"
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="dft"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      
    </LineChart></ResponsiveContainer>
  );
}
