import './charts2.css'
import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function Charts2() {
  return (
    <div className="piechart2">
    <PieChart  width={300} height={250} >
      
      <Pie 
        dataKey="value"
        isAnimationActive={true}
        data={data}
        
        innerRadius={50}
        outerRadius={100}
        label
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
      </Pie>
      
      <Tooltip />
    </PieChart></div>
  );
}
