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


export default function Linecharts(linedata:any) {
  return (
    <ResponsiveContainer height={200} width="100%" >
    <LineChart className="linechart1"
      width={1000}
      height={300}
      data={linedata}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis/>
      <Tooltip />
      
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
       
      />
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      
    </LineChart></ResponsiveContainer>
  );
}
